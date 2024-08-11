import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./OldBills.css";
import Button from '@mui/material/Button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Invoice, Name, Due_Date, Amount, Status) {
  return { Invoice, Name, Due_Date, Amount, Status};
}



const rows = [
  createData("A11289678234", "Albina_SHrestha", "July_13_2018" , "Rs_2000", <Button variant="contained" color="success">
    Paid
  </Button>),
  
];



const OldBills = () => {
  return (
    <div className="OldBills">
      <div className="head">
        <h3>Your Old Bills</h3>
      </div>

      <div className="table2">

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow className="tr1">
            <StyledTableCell align="center">Invoice</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Due_Date</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Invoice}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.Invoice}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Name}</StyledTableCell>
              <StyledTableCell align="center">{row.Due_Date}</StyledTableCell>
              <StyledTableCell align="center">{row.Amount}</StyledTableCell>
              <StyledTableCell align="center">{row.Status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



      </div>
    </div>
  );
};

export default OldBills;
