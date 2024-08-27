import "./Navbar.css";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { Outlet, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="Navbar">
      <div className="div1">
        <ElectricBoltIcon />
        <b>Power Billing Plus</b>
      </div>
      <hr/>
      <div className="div2">
        <nav>
          <ul>
            <li>
              <HomeIcon />&nbsp;&nbsp;
              <Link className="link" to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <EqualizerIcon />&nbsp;&nbsp;
              <Link className="link" to="/reports">Reports</Link>
            </li>
            <li>
              <PersonIcon />&nbsp;&nbsp;
              <Link className="link" to="/manageuser">Manage User</Link>
            </li>
            <li>
              <ReceiptLongIcon />&nbsp;&nbsp;
              <Link className="link" to="/generatebill">Generate Bill</Link>
            </li>
            <li>
              <AccountBoxIcon />&nbsp;&nbsp;
              <Link className="link" to="/adminprofile">Admin Profile</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="div3">
        <Button onClick={() => navigate("/")} variant="contained">Logout</Button>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
