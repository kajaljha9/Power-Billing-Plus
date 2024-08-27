import "./AdminProfile.css";
import Navbar from "./Navbar";
import Avatar from "../../assets/Avatar.svg";
import Button from "@mui/material/Button";

const AdminProfile = () => {
  return (
    <>
   
    <div className="AdminProfile">
      <Navbar />
      <div className="mainbox">
     
        <div className="a">
          &nbsp;&nbsp;<h2>Your Profile</h2>
        </div>
        <br />
        <div className="bc">
          <div className="b">
            <ul>
              <li>
                Admin id: <b>110A</b>
              </li>
              <li>
                Name: <b>Adela Parkson</b>
              </li>
              <li>
                Address:<b>New Delhi</b>
              </li>
              <li>
                Contact No.: <b>8888888888</b>
              </li>
              <li>
                Email: <b>adela98@gmail.com</b>
              </li>
              <li>
                Password: <b>************</b>
              </li>
            </ul>
          </div>
          <div className="c">
            <div>
              <img src={Avatar} alt="Avatar" />
            </div>
            <div>
              <Button variant="contained" color="success">
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminProfile;
