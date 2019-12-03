import React from "react";
import Contact from "../contact/contact";
import "./contactlist.css";

function Contactlist(props) {
  const contactlist = Array.from(props.contactlist);

  return (
    <React.Fragment>
      <div className="card card-default contact-sidebar" id="card_contacts">
        <div id="contacts" className="panel-collapse collapse show">
          <ul className="list-group pull-down" id="contact-list">
            {contactlist.map((contact, index) => (
              <Contact
                key={index}
                id={index}
                contact={contact}
                onDelete={props.onDelete}
                onSelect={props.onSelect}
              ></Contact>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contactlist;
