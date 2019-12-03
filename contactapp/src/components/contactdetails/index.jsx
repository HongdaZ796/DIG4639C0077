import React from "react";
import "./index.css";

function Detail() {
  // console.log(props);

  return (
    <React.Fragment>
      <div className="card contact-detail">
        <div className="card-body">
          <h3 className="text-center">Contacnt Info</h3>
          <h5 className="card-title" id="contactName"></h5>
          <div>
            <i className="fa fa-phone-alt"></i>
            <span className="card-text" id="contactNumber"></span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Detail;
