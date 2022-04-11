import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + "" + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {

  let state = props.dialogsPage

  let userName = state.dialogsData.map((name) => (
    <DialogItem key={name.id} name={name.name} id={name.id} />
  ));

  let userMessages = state.messagesData.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  let newMessageBody = state.newMessagesBody
  
  return (
    <div className={s.dialogs}>
      {/* <h1 className={s.h1}>Dialogs</h1> */}
      <div className={s.users}>{userName}</div>
      <div className={s.messages}>{userMessages}</div>
      <div className={s.input}>
        <div>
          <input value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"
          />
        </div>
        <div>
          <button onClick={onSendMessageClick} className={s.button} >
            DROP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
