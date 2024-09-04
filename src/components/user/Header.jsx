import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import { Grid } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Grid container>
      <div className="header">
        <div onClick={() => navigate("/")} className="icon-name">
          <div className="icon">
            <ElectricBoltIcon />
          </div>
          <div className="name">
            <h3>Power Billing Plus</h3>
          </div>
        </div>
        <Grid sx={{display:"flex", justifyContent:"flex-end"}} className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon  /> : <MenuIcon />}
        </Grid>
        <div className={`navbar ${menuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="link" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="link" to="/viewbill">
                  Bill
                </Link>
              </li>
              <li>
                <Link className="link" to="/signup">
                  SignUp
                </Link>
              </li>
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </Grid>
  );
};

export default Header;