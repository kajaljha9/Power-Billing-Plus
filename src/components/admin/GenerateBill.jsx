import Navbar from "./Navbar";
import "./GenerateBill.css";
import Button from "@mui/material/Button";
import {
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  TextField
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const GenerateBill = () => {
  const navigate = useNavigate();
  return (
    <div className="GenerateBill">
      <div className="gnav">
        <Navbar />
      </div>

      <div className="genDetails">
        <div className="gdhead">
          <h2>Calculate Bill</h2>
        </div>
        <br />

        <div className="gdetails">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment">
              Customer Username
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment"
              label="cususername"
            />
          </FormControl>
          <br />
          <br />
          <Grid
            container
            gap={1}
            sx={{ display: "flex", justifyContent: "space-between " }}
          >
            <Grid item md={5.5}>
              <TextField
                label="Date"
                type="date"
                variant="outlined"
                sx={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item md={5.5}>
              <TextField
                label="Due Date"
                type="date"
                variant="outlined"
                sx={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
          </Grid>
          <br />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment">Units</InputLabel>
            <OutlinedInput id="outlined-adornment" label="Units" />
          </FormControl>
          <br />
          <br />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment">
              Bill Due
            </InputLabel>
            <OutlinedInput id="outlined-adornment" label="Bill Due" />
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
