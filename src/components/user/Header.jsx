import "./Header.css";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div onClick={() => navigate("/")} className="icon-name">
        <div className="icon">
          <ElectricBoltIcon />
        </div>

        <div className="name">
          <h3>Power Billing Plus</h3>
        </div>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/" href=".a3">
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
                View Bill
              </Link>
            </li>
            <li>
              <Link className="link" to="/signup">
                Sign up
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
  );
};

export default Header;
