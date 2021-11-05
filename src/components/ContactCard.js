import React from "react";

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
        <div className="ui header">{name}</div>
        <div>{email}</div>
      </div>
      <div className="ui right aligned header">
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            marginTop: "7px",
          }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
      <div />
    </div>
  );
};

export default ContactCard;
