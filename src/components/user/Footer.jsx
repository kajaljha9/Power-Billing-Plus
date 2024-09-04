import { Grid } from "@mui/material";
import "./Footer.css";
import { Outlet, Link } from "react-router-dom";


function Footer() {
  return (
    <Grid container >
    
    <div className="Footer">
      <div className="f1">
        <h3>PowerBilling Plus</h3>
        <p>Powering your life with convinience and affordability</p>
      </div>

      <div className="f2">
        <div className="f3">
          <h4>Useful Links</h4>
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
            </ul>
          </nav>
          <Outlet />
        </div>
        <div className="f4">
          <h4>Contact Us</h4>
          <p>Central Office, MG Road Delhi</p>
          <p>India</p>
          <p>Telephone:9999999999</p>
          <p>Email:powerbillingplus@gmail.com</p>
        </div>
      </div>
    </div>
    </Grid>
  );
}

export default Footer;
