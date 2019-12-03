import React, { Component } from "react";
import Contactlist from "./components/contactlist/contactlist";
import Detail from "./components/contactdetails/index";
import "./App.css";
import AddContact from "./components/addContact/index";
import Profile from "./components/profile/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactlist: "",
      profile: "",
      added: "",
      removed: ""
    };
    this.updateContactList = this.updateContactList.bind(this);
  }

  componentDidMount() {
    window
      .fetch("https://apiexample.website/contacts", {
        headers: { API: "zheng" }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({ contactlist: data.contacts });
      });
    this.updateProfile();
    // this.updateContactList();
  }

  componentDidUpdate() {
    this.updateContactList();
    this.updateProfile();
  }

  handleAdd = e => {
    e.preventDefault();

    let contactName = document.getElementById("formName").value;
    let contactNumber = document.getElementById("formNumber").value;
    // console.log(contactName + " " + contactNumber);
    fetch("https://apiexample.website/contacts/add", {
      method: "POST",
      headers: {
        api: "zheng",
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: contactName,
        number: contactNumber
      })
    })
      // .then(response => response.json())
      // .then(data => this.setState({ removed: data.removed }))
      .then(this.updateContactList())
      .catch(err => {
        console.log(err);
      });
    document.getElementById("formName").value = "";
    document.getElementById("formNumber").value = "";
  };

  handleDelete = contactId => {
    // console.log(contactId);
    fetch("https://apiexample.website/contacts/remove", {
      method: "POST",
      headers: {
        api: "zheng",
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        position: contactId
      })
    })
      // .then(response => response.json())
      // .then(data => this.setState({ removed: data.removed }))
      .then(this.updateContactList())
      .catch(err => {
        console.log(err);
      });
  };
  handleSelect = contactDetail => {
    document.getElementById("contactName").textContent = contactDetail.name;
    document.getElementById("contactNumber").textContent = contactDetail.number;
  };

  handleDisplay = () => {
    document
      .getElementById("contactForm")
      .classList.toggle("contact-form-display");
  };

  handleDisplayProfile = () => {
    console.log("Profile clicked");
    document
      .getElementById("profileContainer")
      .classList.toggle("profile-container-display");
  };

  handleCross = () => {
    // console.log("cross is clicked");
    document
      .getElementById("contactForm")
      .classList.remove("contact-form-display");
  };

  handleCrossProfile = () => {
    // console.log("cross is clicked");
    document
      .getElementById("profileContainer")
      .classList.remove("profile-container-display");
  };
  updateContactList = () => {
    fetch("https://apiexample.website/contacts", {
      headers: { API: "zheng" }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ contactlist: data.contacts });
      });
  };

  updateProfile = () => {
    fetch("https://apiexample.website/profile", {
      headers: { API: "zheng" }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ profile: data });
      });
  };
  render() {
    // console.log(this.state.profile);
    return (
      <div className="container main">
        <AddContact
          onAdd={this.handleAdd}
          onCross={this.handleCross}
        ></AddContact>
        <Profile
          user={this.state.profile}
          onCross={this.handleCrossProfile}
        ></Profile>
        <nav className="navbar navbar-white bg-white">
          <span className="navbar-brand" href="#">
            <strong>Contacts</strong>
          </span>
          <div>
            <i className="fa fa-plus mx-2" onClick={this.handleDisplay}></i>
            <i
              className="fa fa-user-circle"
              onClick={this.handleDisplayProfile}
            ></i>
          </div>
        </nav>
        <div className="row container-row">
          <div className="col-3 bg-light pt-2">
            <Contactlist
              contactlist={this.state.contactlist}
              onDelete={this.handleDelete}
              onSelect={this.handleSelect}
            ></Contactlist>
          </div>
          <div className="col-9 bg-light pt-2">
            <Detail></Detail>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
