import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AddContacts from "./components/AddContacts";
import ContactList from "./components/ContactList";
import { uuid } from "uuidv4";
import ContactDeatails from "./components/ContactDeatails";
import api from "../src/api/contacts";
import EditContacts from "./components/EditContact";

function App() {
  const LOCAL_STROAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, searchStateResult] = useState([]);

  //Retriveing the contacts from the api fake
  const retriveContacts = async () => {
    const response = await api.get("/contact");
    return response.data;
  };

  //removing the contacts from the list
  const removeContactHandle = async (id) => {
    //creating a new updated list of contacts by removing
    //the passed id from the list
    await api.delete(`/contact/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  //upddating and addong the new contacts into the exiting object;
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contact", request);
    setContacts([...contacts, response.data]);
  };
  //reloading the stored data in local storege back into the webpage
  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STROAGE_KEY));
    // if (retriveContacts) {
    //   setContacts(retriveContacts);
    // }
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) {
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, []); //if you add the previous data as parametre the page malfuctions
  //better to use a empty array
  //storing the enteres data into the local storeage so we can retrive back when the refresh button is pressed
  useEffect(() => {
    // localStorage.setItem(LOCAL_STROAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  //search handler
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      searchStateResult(newContactList);
    } else {
      searchStateResult(contacts);
    }
  };
  //edit

  const editContactHandler = async (contact) => {
    const response = await api.put(`/contact/${contact.id}`, contact);
    console.log(response.data);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandle}
                term={searchTerm}
                searchKeyWord={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContacts addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit"
            element={<EditContacts editContactHandler={editContactHandler} />}
          />
          <Route path="/contacts/:id" element={<ContactDeatails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
{
  /*giving in a prop or passing the prop(aka data)*/
}

{
  /* <AddContacts addContactHandler={addContactHandler} />
  <ContactList contacts={contacts} getContactId={removeContactHandle} /> */
}
