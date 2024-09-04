import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./ViewBill.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

function createData(Invoice, Name, Due_Date, Amount, Payment) {
  return { Invoice, Name, Due_Date, Amount, Payment };
}

const rows = [
  createData(
    "A11289678234",
    "Albina_SHrestha",
    "August_13_2018",
    "Rs_2000",
    <Button className="btn2" variant="contained">
      Make Payment
    </Button>
  )
];

const ViewBill = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <br />
      <div className="ViewBill">
        <div className="billhead">
          <h2>Your Bill</h2>
        </div>

        <div className="vob">
          <Button className="viewbtn"
            variant="contained"
            sx={{ justifyContent: "flex-end " }}
            onClick={() => navigate("/oldbills")}
          >
            View Older Bills
          </Button>
        </div>

        <div className="billtable">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead>
                <TableRow className="rowname">
                  <TableCell className="r1" align="center">
                    Invoice
                  </TableCell>
                  <TableCell className="r1" align="center">
                    Name
                  </TableCell>
                  <TableCell className="r1" align="center">
                    Due_Date
                  </TableCell>
                  <TableCell className="r1" align="center">
                    Amount
                  </TableCell>
                  <TableCell className="r1" align="center">
                    Payment
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.Invoice}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.Invoice}
                    </TableCell>
                    <TableCell align="center">{row.Name}</TableCell>
                    <TableCell align="center">{row.Due_Date}</TableCell>
                    <TableCell align="center">{row.Amount}</TableCell>
                    <TableCell
                      align="center"
                      onClick={() => navigate("/payment")}
                    >
                      {row.Payment}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <br />
      </div>
      <Footer />
    </>
  );
};

export default ViewBill;
