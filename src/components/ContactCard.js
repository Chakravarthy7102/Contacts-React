import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  //taking in the prop and retrivigndata from that
  //javascript object destructing
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        className="ui mini circular image"
        src="https://raw.githubusercontent.com/dmalvia/React_Tutorial_Contact_Manager_App/master/src/images/user.png"
        alt="user"
      />
      <div className="content">
        <Link
          to={{
            pathname: `/contacts/${id}`,
            state: { contact: props.contact },
          }}
        >
          <div className="ui header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      <div className="ui right aligned header">
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            marginTop: "7px",
            marginLeft: "10px",
          }}
          onClick={() => props.clickHandler(id)}
        ></i>
        <Link
          to={{
            pathname: `/edit`,
            state: { contact: props.contact },
          }}
        >
          <i
            className="edit alternate outline icon"
            style={{
              color: "blue",
              marginTop: "7px",
            }}
          ></i>
        </Link>
      </div>

      <div />
    </div>
  );
};

export default ContactCard;
