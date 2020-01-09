import React from "react";
import MessageItem from "./messageItem";

const MessageList = ({ messages }) => {
    return(
        <ul className="chat-list">
            {messages.map((message, i) =>{
                return <MessageItem key={i} message={message} />;
            })}
            {messages.lenght === 0 && <li>
                No new message !!!
                </li>}
        </ul>
    );
};



export default MessageList;