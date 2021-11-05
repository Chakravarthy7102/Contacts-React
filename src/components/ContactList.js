import React from "react";
import ContactCard from "./ContactCard"; //we do not use {} for default components
import { Link } from "react-router-dom";
const ContactList = (props) => {
  //console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  //reading the list from the contacts objects

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
      ></ContactCard>
    );
  });
  return (
    <div className="main-main">
      <h1>helllll</h1>
      <div className="main">
        <h2>Contact list</h2>
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>

        <div className="ui celled list">{renderContactList}</div>
      </div>
    </div>
  );
};

export default ContactList;
