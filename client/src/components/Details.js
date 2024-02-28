import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import RoomIcon from "@mui/icons-material/Room";
import image1 from "../img/W_profile.png";

const Details = () => {
  return (
    <div className="container mt03">
      <h1 style={{ fontWeight: 400 }}>Welcome Kang JiYeong</h1>

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
        <div className="add_btn">
                <button className="btn btn-primary mx-2">
                    <CreateIcon />
                </button>
                <button className="btn btn-danger">
                <DeleteOutlineIcon />
                </button>
        </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src={image1} style={{ width: 50 }} alt="profile" />
              <h3 className="mt-3">Name : <span>Kang JiYeong</span></h3>
              <h3 className="mt-3">Age : <span>27</span></h3>
              <p className="mt-3"><MailOutlineIcon /> Email : <span>kang@email.com</span></p>
              <p className="mt-3"><BusinessCenterIcon /> Occuption : <span>webdeveloper</span></p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-5"><StayCurrentPortraitIcon /> Mobile : <span>01044445555</span></p>
              <p className="mt-3"><RoomIcon /> Location : <span>South Korea</span></p>
              <p className="mt-3">Description : <span></span></p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
