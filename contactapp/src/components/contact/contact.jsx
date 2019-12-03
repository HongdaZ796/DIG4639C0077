import React from "react";
import "./contact.css";

function Contact(props) {
  // console.log(props);

  return (
    <React.Fragment>
      <li className="contact-item">
        <div className="row w-100 contact-container">
          <div
            className="contact-delete bg-danger"
            onClick={() => props.onDelete(props.id)}
          >
            <i className="fa fa-minus-square"></i>
          </div>
          <div
            className="text-center text-sm-left contact-info"
            onClick={() => props.onSelect(props.contact)}
          >
            <h3 className="name lead font-weight-normal" id="contactListName">
              {props.contact.name}
            </h3>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}

export default Contact;
