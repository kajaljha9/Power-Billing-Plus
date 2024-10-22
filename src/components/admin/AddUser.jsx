import Navbar from "./Navbar";
import "./AddUser.css";
import Button from "@mui/material/Button";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from "@mui/material";

import {
  LocationOn,
  Visibility,
  VisibilityOff,
  LocalPhone,
  Email
} from "@mui/icons-material";
import { useState } from "react";

const AddUser = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="AddUser">
      <div className="gnav">
        <Navbar />
      </div>

      <div className="adduserDetails">
        <div className="udhead">
          <h2>Add User</h2>
        </div>
        <br />
        <br />
        <div className="details">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment">Full Name</InputLabel>
            <OutlinedInput id="outlined-adornment" label="Full Name" />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment">Username</InputLabel>
            <OutlinedInput id="outlined-adornment" label="Username" />
          </FormControl>

          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item md={6.5}>
              <FormControl className="add" variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment">Address</InputLabel>
                <OutlinedInput
                  id="outlined-adornment"
                  endAdornment={
                    <InputAdornment sx={{ width: "auto" }}>
                      <IconButton>
                        <LocationOn />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Address"
                />
              </FormControl>
            </Grid>

            <Grid item md={5}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment">Phone No.</InputLabel>
                <OutlinedInput
                  id="outlined-adornment"
                  endAdornment={
                    <InputAdornment sx={{ width: "auto" }}>
                      <IconButton>
                        <LocalPhone />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Phone No."
                />
              </FormControl>
            </Grid>
          </Grid>

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment"
              endAdornment={
                <InputAdornment sx={{ width: "auto" }}>
                  <IconButton>
                    <Email />
                  </IconButton>
                </InputAdornment>
              }
              label="Email"
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment sx={{ width: "auto" }}>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <br />
        <div className="addubtn">
          <Button variant="contained">Add</Button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
