import Navbar from "./Navbar";
import "./ManageUser.css";
import { Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(uid, name, address, serviceno, amount, action) {
  return { uid, name, address, serviceno, amount, action};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ManageUser = () => {
  return (
    <div className="ManageUser">
      <Navbar />
      <div className="users">
        <div className="addbtn">
          <Button variant="contained">Add User</Button>
        </div>
        <div className="tablebody">
          <div className="udetail">
            <h2>User Details</h2>
          </div>
          <br />
          <div className="usertable">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="left">UID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Service No.</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.uid}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" component="th" scope="row">
                        {row.uid}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.address}</TableCell>
                      <TableCell align="right">{row.serviceno}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">{row.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
