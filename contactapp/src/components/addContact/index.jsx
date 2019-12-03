import React from "react";
import "./index.css";

function AddContact(props) {
  // console.log(props);

  return (
    <React.Fragment>
      <div className="contact-form bg-white" id="contactForm">
        <h3 className="text-center">Add Contact</h3>
        <i className="fa fa-times contact-cross" onClick={props.onCross}></i>
        <form method="POST">
          <div className="form-group">
            <label>Name</label>
            <input
              id="formName"
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required="required"
            />
          </div>
          <div className="form-group">
            <label>Number</label>
            <input
              id="formNumber"
              type="text"
              name="number"
              className="form-control"
              placeholder="Number"
              required="required"
            />
          </div>
          <button
            className="btn btn-lg btn-primary"
            type="submit"
            onClick={props.onAdd}
          >
            Done
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddContact;
