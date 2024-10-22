
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AdminLogin.css";
import LoginPageImage from "../../assets/hero-img.png.svg";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Typography, Grid } from "@mui/material";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const navigate = useNavigate();

  return (
    <Box
      className="AdminLogin"
      sx={{ padding: { xs: "20px", md: "40px" }, backgroundColor: "#f0f4ff" }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box className="loginfo" sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Power Billing Plus
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 4 }}>
              Admin Login
            </Typography>

            <TextField
              id="email"
              label="Email address"
              variant="filled"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <FormControl variant="filled" fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="password"
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
            <Button
              variant="contained"
              onClick={() => {
              
              }}
              sx={{ width: "100%", backgroundColor: "#3965FF" }}
            >
              Login
            </Button>
            <Box sx={{ marginTop: 2 }}>
              <a
                href="##"
                onClick={() => navigate("/forgotpassword")}
                className="fp"
              >
                Forgot password?
              </a>
            </Box>
            <Box sx={{ marginTop: 2 }}>
              <a href="##" onClick={() => navigate("/signup")}>
                Create New Account
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img
            className="loginImage"
            src={LoginPageImage}
            alt="Login Illustration"
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminLogin;
