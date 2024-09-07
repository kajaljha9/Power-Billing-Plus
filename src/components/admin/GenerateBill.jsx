import Navbar from "./Navbar";
import "./GenerateBill.css";
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
    <div className="GenerateBill">
    <div className="gnav"><Navbar /></div>
      

      <div className="genDetails">
        <div className="gdhead">
          <h2>Calculate Bill</h2>
        </div>
        <br />
        <br />
        <div className="gdetails">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">UID</InputLabel>
            <OutlinedInput id="outlined-adornment-password" label="UID" />
          </FormControl>
          <br/>
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
          <br/>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Units</InputLabel>
            <OutlinedInput id="outlined-adornment-password" label="Email" />
          </FormControl>
          <br/>
          <br/>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Bill Due
            </InputLabel>
            <OutlinedInput id="outlined-adornment-password" label="Bill Due" />
          </FormControl>
        </div>
        <br />
        
        <div className="calbtn">
          <Button variant="contained" onClick={() => navigate("/bill")}>
            Calculate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GenerateBill;
