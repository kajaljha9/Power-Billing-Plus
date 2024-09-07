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
    <div className="gnav"><Navbar /></div>
      

      <div className="adduserDetails">
        <div className="udhead">
          <h2>Add User</h2>
        </div>
        <br />
        <br />
        <div className="details">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Service No.
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              label="Service No."
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Full Name
            </InputLabel>
            <OutlinedInput id="outlined-adornment-password" label="Full Name" />
          </FormControl>

          <Grid container gap={1}>
            <Grid item md={7}>
              <FormControl className="add" variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  endAdornment={
                    <InputAdornment>
                      <IconButton>
                        <LocationOn />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Address"
                />
              </FormControl>
            </Grid>

            <Grid item md={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Phone No.
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  endAdornment={
                    <InputAdornment>
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
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment>
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
