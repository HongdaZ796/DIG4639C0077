import React from "react";
import "./index.css";

function Profile(props) {
  console.log(props);

  return (
    <React.Fragment>
      <div className="profile-container bg-white" id="profileContainer">
        <h3 className="text-center">User Profile</h3>
        <i className="fa fa-times contact-cross" onClick={props.onCross}></i>
      </div>
    </React.Fragment>
  );
}

export default Profile;
