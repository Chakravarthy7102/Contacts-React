import React from "react";
import { Link } from "react-router-dom";

const ContactDeatails = (props) => {
  console.log(props);
  // const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <h1>THfjlsdkfjlkadsjf</h1>
      <div className="ui card centered">
        <div className="image"></div>
        <img
          src="https://media.gq.com/photos/586fbf1ab730b94511591fad/master/w_2000,h_1333,c_limit/the-weeknd-0217-GQ-FEWE04-01-3x2.jpg"
          alt="user"
        />
        <div className="content">
          <div className="header">Chakravarthy</div>
          <div className="description">198r1a1237@cmrec.ac.in</div>
        </div>
      </div>
      <div className="center-div" style={{ textAlign: "center" }}>
        <Link to="/">
          <button className="ui button blue">Back To Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDeatails;
