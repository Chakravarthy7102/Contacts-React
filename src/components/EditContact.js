import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useNavigate } from "react-router-dom";

class EditContacts extends React.Component {
  state = {
    id: "12",
    name: "chakravarhty",
    email: "chand@gmail.com",
  };
  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are Mandetory!!!");
      return;
    }

    this.props.editContactHandler(this.state);

    window.location.replace("/");
  };
  render() {
    return (
      <div className="ui main">
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <h2>Edit Contact</h2>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}
export default EditContacts;
