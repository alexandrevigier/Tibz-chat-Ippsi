import React from 'react';
import {useState} from 'react';
import '../App.css';
import MessageList from "./messageList";
import MessageBar from "./messageBar";

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const handleMessageSubmit = message => {
        setMessages([...messages, {body: message, username:"Freezer"}]);
    };

    return (
        <div>
            <div className="chat-header">
                Chat
            </div>
                <MessageList messages={messages}/>
                <MessageBar handleMessageSubmit={handleMessageSubmit}/>
        </div>
    );
        
};

export default Chat;