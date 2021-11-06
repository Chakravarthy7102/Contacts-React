import React, { useRef } from "react";
import ContactCard from "./ContactCard"; //we do not use {} for default components
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);
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
  const inputE1 = useRef("");
  const getSearchTerm = () => {
    props.searchKeyWord(inputE1.current.value);
  };
  return (
    <div className="main-main">
      <h1>helllll</h1>
      <div className="main">
        <h2>Contact list</h2>
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
        <div className="ui search">
          <div className="ui icon input">
            <input
              ref={inputE1}
              type="text"
              placeholder="Search"
              className="prompt"
              style={{ marginTop: "1.3em" }}
              value={props.term}
              onChange={getSearchTerm}
            />
            <i className="search icon" style={{ marginTop: "0.7em" }}></i>
          </div>
        </div>

        <div className="ui celled list">
          {renderContactList.length > 1
            ? renderContactList
            : "No Contacts Available"}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
