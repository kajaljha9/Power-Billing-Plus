import Navbar from "./Navbar";
import "./AddUser.css";
// import "./GenerateBill.css";
import Button from "@mui/material/Button";
import { FormControl, Grid, InputLabel, OutlinedInput } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";

const GenerateBill = () => {
  const navigate = useNavigate();
  return (
    <div className="AddUser">
      <Navbar />

      <div className="userDetails">
        <div className="udhead">
          <h2>Calculate Bill</h2>
        </div>
        <br />
        <br />
        <div className="details">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">UID</InputLabel>
            <OutlinedInput id="outlined-adornment-password" label="UID" />
          </FormControl>

          <Grid container gap={1}>
            <Grid item md={5.9}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Date" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item md={5.9}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Due Date" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </Grid>

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Units</InputLabel>
            <OutlinedInput id="outlined-adornment-password" label="Email" />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Bill Due
            </InputLabel>
            <OutlinedInput id="outlined-adornment-password" label="Bill Due" />
          </FormControl>
        </div>
        <br />
        <div className="mubtn">
          <Button variant="contained" onClick={() => navigate("/bill")}>
            Calculate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GenerateBill;
