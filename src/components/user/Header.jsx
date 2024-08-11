import "./Header.css";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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


        {/* <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
          <li>View Bill</li>
          <li>New Connection</li>
          <li></li>
        </ul> */}

        <a href="##" onClick={() => navigate("/")}>
          Home
        </a>
        <a href="##" onClick={() => navigate("/")}>
          About
        </a>
        <a href="##">Profile</a>
        <a href="##" onClick={() => navigate("/viewbill")}>View Bill</a>
        <a href="##">New Connection</a>
        <a
          href="##"
          onClick={() => {
            navigate("/login");
            setIsLoggedIn(true);
          }}
        >
          {isLoggedIn === true ? "Logout" : "Login"}
        </a>
      </div>
    </div>
  );
};

export default Header;
