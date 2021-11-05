import React from "react";
import ContactCard from "./ContactCard";
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
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
