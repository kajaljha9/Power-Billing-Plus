// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
// import "./ViewBill.css";
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow
// } from "@mui/material";
// import Header from "./Header";
// import Footer from "./Footer";

// function createData(Invoice, Name, DueDate, Amount) {
//   return { Invoice, Name, DueDate, Amount };
// }

// const rows = [
//   createData("A11289678234", "Albina_SHrestha", "August_13_2018", "Rs_2000"),
//   createData("A11289678234", "Albina_SHrestha", "August_13_2018", "Rs_2000"),
//   createData("A11289678234", "Albina_SHrestha", "August_13_2018", "Rs_2000"),
//   createData("A11289678234", "Albina_SHrestha", "August_13_2018", "Rs_2000"),
//   createData("A11289678234", "Albina_SHrestha", "August_13_2018", "Rs_2000")
// ];

// const ViewBill = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <Header />
//       <br />
//       <br />
//       <div className="ViewBill">
//         <div className="billhead">
//           <h2>Your Bill</h2>
//         </div>

//         <div className="vob">
//           <Button
//             className="viewbtn"
//             variant="contained"
//             sx={{ justifyContent: "flex-end " }}
//             onClick={() => navigate("/oldbills")}
//           >
//             View Older Bills
//           </Button>
//         </div>

//         <div className="billtable">
//           <TableContainer component={Paper} className="billtable1">
//             <Table stickyHeader aria-label="simple table">
//               <TableHead>
//                 <TableRow className="rowname">
//                   <TableCell className="r1" align="center">
//                     Invoice
//                   </TableCell>
//                   <TableCell className="r1" align="center">
//                     Name
//                   </TableCell>
//                   <TableCell className="r1" align="center">
//                     DueDate
//                   </TableCell>
//                   <TableCell className="r1" align="center">
//                     Amount
//                   </TableCell>
//                   <TableCell className="r1" align="center">
//                     Payment
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows.map((row) => (
//                   <TableRow
//                     key={row.Invoice}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                   >
//                     <TableCell align="center" component="th" scope="row">
//                       {row.Invoice}
//                     </TableCell>
//                     <TableCell align="center">{row.Name}</TableCell>
//                     <TableCell align="center">{row.DueDate}</TableCell>
//                     <TableCell align="center">{row.Amount}</TableCell>
//                     <TableCell
//                       align="center"
//                       onClick={() => navigate("/payment")}
//                     >
//                       <Button className="btn2" variant="contained">
//                         Make Payment
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//         <br />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ViewBill;
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
  TableRow,
  Typography
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

function createData(Invoice, Name, DueDate, Amount) {
  return { Invoice, Name, DueDate, Amount };
}

const rows = [
  createData("A11289678234", "Albina Shrestha", "August 13, 2018", "Rs 2000"),
  createData("A11289678235", "John Doe", "September 10, 2018", "Rs 1800"),
  createData("A11289678236", "Jane Smith", "October 5, 2018", "Rs 2200"),
  createData("A11289678237", "Mike Johnson", "November 12, 2018", "Rs 2100"),
  createData("A11289678238", "Emily Davis", "December 15, 2018", "Rs 2500"),
  createData("A11289678234", "Albina Shrestha", "August 13, 2018", "Rs 2000"),
  createData("A11289678235", "John Doe", "September 10, 2018", "Rs 1800"),
  createData("A11289678236", "Jane Smith", "October 5, 2018", "Rs 2200"),
  createData("A11289678237", "Mike Johnson", "November 12, 2018", "Rs 2100"),
  createData("A11289678238", "Emily Davis", "December 15, 2018", "Rs 2500")
];

const ViewBill = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="ViewBill">
        <div className="billhead">
          <Typography variant="h4" align="center">
            Your Bill
          </Typography>
        </div>

        <div className="vob">
          <Button
            sx={{
              width: "fit-content",
              backgroundColor: "#717FF5 !important"
            }}
            className="viewbtn"
            variant="contained"
            onClick={() => navigate("/oldbills")}
          >
            View Older Bills
          </Button>
        </div>

        <div className="billtable">
          <TableContainer component={Paper} className="billtable1">
            <Table stickyHeader aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ backgroundColor: "#1D4EA3", color: "#fff",width: "auto" }}
                    align="center"
                  >
                    Invoice
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "#1D4EA3", color: "#fff" ,width: "auto"}}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "#1D4EA3", color: "#fff",width: "auto"}}
                    align="center"
                  >
                    Due Date
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "#1D4EA3", color: "#fff" ,width: "auto"}}
                    align="center"
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "#1D4EA3", color: "#fff",width: "auto" }}
                    align="center"
                  >
                    Payment
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.Invoice}>
                    <TableCell sx={{width:"auto"}} align="center">{row.Invoice}</TableCell>
                    <TableCell sx={{width:"auto"}} align="center">{row.Name}</TableCell>
                    <TableCell sx={{width:"auto"}} align="center">{row.DueDate}</TableCell>
                    <TableCell sx={{width:"auto"}} align="center">{row.Amount}</TableCell>
                    <TableCell sx={{width:"auto"}} align="center">
                      <Button
                        sx={{ width: "150px !important", borderRadius: "10px" }}
                        className="btn2"
                        variant="contained"
                        onClick={() => navigate("/payment")}
                      >
                        Make Payment
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewBill;
