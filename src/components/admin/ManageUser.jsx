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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function createData(uid, name, address, serviceno, amount) {
  return { uid, name, address, serviceno, amount };
}

const rows = [
  createData("110", "xyz", "New Delhi", 110, 12345),
  createData("111", "abc", "Jaipur", 111, 10000),
  createData("112", "pqr", "Banglore", 112, 12344),
  createData("113", "def", "Gurugram", 113, 12456),
  createData("114", "ghi", "Dwarka", 114, 15678),
  createData("115", "jkl", "Noida", 115, 17098),
  createData("116", "mno", "Old  ", 116, 16345),
  createData("110", "xyz", "New Delhi", 110, 12345),
  createData("111", "abc", "Jaipur", 111, 10000),
  createData("112", "pqr", "Banglore", 112, 12344),
  createData("113", "def", "Gurugram", 113, 12456),
  createData("114", "ghi", "Dwarka", 114, 15678),
  createData("115", "jkl", "Noida", 115, 17098),
  createData("116", "mno", "Old  ", 116, 16345)
];

const ManageUser = () => {
  const navigate = useNavigate();
  return (
    <div className="ManageUser">
    <div className="gnav"> <Navbar /></div>
     
      <div className="users">
        <div className="addbtn">
          <Button variant="contained" onClick={() => navigate("/adduser")}>
            Add User
          </Button>
        </div>
       
        <div className="udtablebody">
          <div className="udetail">
            <h2>User Details</h2>
          </div>
          <br />
          <div className="userdetail">
            <TableContainer component={Paper} className="userdetail">
              <Table stickyHeader size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{backgroundColor:"#1D4EA3" ,color:"#fff", width: "auto" }} align="left">
                      Name
                    </TableCell>
                    <TableCell sx={{ backgroundColor:"#1D4EA3" ,color:"#fff",width: "auto" }} align="left">
                      Address
                    </TableCell>
                    <TableCell sx={{backgroundColor:"#1D4EA3" ,color:"#fff", width: "auto" }} align="left">
                      UID
                    </TableCell>
                    <TableCell sx={{ backgroundColor:"#1D4EA3" ,color:"#fff",width: "auto" }} align="left">
                      Service No.
                    </TableCell>
                    <TableCell sx={{backgroundColor:"#1D4EA3" ,color:"#fff", width: "auto" }} align="left">
                      Amount
                    </TableCell>
                    <TableCell sx={{ backgroundColor:"#1D4EA3" ,color:"#fff",width: "auto" }} align="left">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.uid}>
                      <TableCell sx={{ width: "auto" }} align="left">
                        {row.uid}
                      </TableCell>
                      <TableCell sx={{ width: "auto" }} align="left">
                        {row.name}
                      </TableCell>
                      <TableCell sx={{ width: "auto" }} align="left">
                        {row.address}
                      </TableCell>
                      <TableCell sx={{ width: "auto" }} align="left">
                        {row.serviceno}
                      </TableCell>
                      <TableCell sx={{ width: "auto" }} align="left">
                        {row.amount}
                      </TableCell>
                      <TableCell sx={{ width: "auto" }} align="left">
                        <EditIcon />
                        <DeleteIcon />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
