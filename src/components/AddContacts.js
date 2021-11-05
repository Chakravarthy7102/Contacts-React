import React from "react";

class AddContacts extends React.Component {
  //creating state object to store the current state values
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault(); //this prevents the page to get refreshed when user submits the form
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are Mandetory!!!");
      return;
    }
    //adding the cuurent state to the contact handler and it will concat the
    //present state with current state of data
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <h2>Add Contact</h2>
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
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContacts;
