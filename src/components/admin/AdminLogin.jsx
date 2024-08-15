import "./AdminLogin.css";

import Image2 from "../../assets/cardImg.svg";
import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className="AdminLogin">
      <div className="left">
        <h3>Admin Login</h3><br/>
        <p>Enter your email and password to log in!</p><br/>

        <h3>Log in</h3>
        <br />
        <TextField
          sx={{ width: "25ch" }}
          id="filled-basic"
          label="Email address"
          variant="filled"
        />
        <br />
        <br />
        <FormControl sx={{ width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <br />

        <Button sx={{ width: "15ch" }} variant="contained">
          Login
        </Button>

        <br />
        <br />
        <div className="fplink">
          <a href="##" onClick={() => navigate("/forgotpassword")}>
            Forgot password?
          </a>
        </div>
      </div>

      <div className="right">
        <img src={Image2} alt="img" />
      </div>
    </div>
  );
};

export default AdminLogin;
