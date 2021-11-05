import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContacts from "./components/AddContacts";
import ContactList from "./components/ContactList";
import { uuid } from "uuidv4";

function App() {
  const LOCAL_STROAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  //removing the contacts from the list
  const removeContactHandle = (id) => {
    //creating a new updated list of contacts by removing
    //the passed id from the list
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  //upddating and addong the new contacts into the exiting object;
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  //reloading the stored data in local storege back into the webpage
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STROAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []); //if you add the previous data as parametre the page malfuctions
  //better to use a empty array
  //storing the enteres data into the local storeage so we can retrive back when the refresh button is pressed
  useEffect(() => {
    localStorage.setItem(LOCAL_STROAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContacts addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandle} />
      {/*giving in a prop or passing the prop(aka data)*/}
    </div>
  );
}

export default App;
