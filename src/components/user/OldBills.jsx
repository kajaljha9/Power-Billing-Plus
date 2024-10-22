import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";
import "./OldBills.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

function createData(Invoice, Name, Due_Date, Amount) {
  return { Invoice, Name, Due_Date, Amount };
}

const rows = [
  createData("A11289678234", "Albina Shrestha", "July 13, 2018", "Rs 2000"),
  createData("A11289678235", "John Doe", "August 5, 2018", "Rs 1800"),
  createData("A11289678236", "Jane Smith", "September 20, 2018", "Rs 2200"),
  createData("A11289678237", "Mike Johnson", "October 15, 2018", "Rs 2100"),
  createData("A11289678238", "Emily Davis", "November 10, 2018", "Rs 2500"),
  createData("A11289678239", "Chris Brown", "December 1, 2018", "Rs 1900"),
  createData("A11289678240", "Sara Wilson", "January 25, 2019", "Rs 2300"),
  createData("A11289678241", "David Lee", "February 18, 2019", "Rs 2000"),
  createData("A11289678242", "Laura Kim", "March 12, 2019", "Rs 2400"),
  createData("A11289678243", "Tom White", "April 30, 2019", "Rs 2700")
];

const OldBills = () => {
  return (
    <div
      style={{
        // border: "2px solid blue"
      }}
    >
      <Header />
      <Box
        sx={{
          // border: "2px solid red",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          animation: "fadeIn 0.6s ease-in-out",
          padding: "3rem",
          marginTop: "10px",
          width: "70vw",
          height: "85vh",
          margin: "auto"
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Your Old Bills
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            height: "60vh",
            width: "90%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
            // border: "2px solid red",
          }}
        >
          <Table stickyHeader aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "#1D4EA3",
                    color: "#fff",
                    width: "auto"
                  }}
                  align="center"
                >
                  Invoice
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#1D4EA3",
                    color: "#fff",
                    width: "auto"
                  }}
                  align="center"
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#1D4EA3",
                    color: "#fff",
                    width: "auto"
                  }}
                  align="center"
                >
                  Due Date
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#1D4EA3",
                    color: "#fff",
                    width: "auto"
                  }}
                  align="center"
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#1D4EA3",
                    color: "#fff",
                    width: "auto"
                  }}
                  align="center"
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Invoice}>
                  <StyledTableCell
                    align="center"
                    component="th"
                    scope="row"
                    sx={{ width: "auto" }}
                  >
                    {row.Invoice}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "auto" }}>
                    {row.Name}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "auto" }}>
                    {row.Due_Date}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "auto" }}>
                    {row.Amount}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "auto" }}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#32CD32" }}
                    >
                      Paid
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </div>
  );
};

export default OldBills;
