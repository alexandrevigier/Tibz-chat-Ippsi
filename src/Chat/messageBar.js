import React, { useState } from 'react';

const MessageBar = props => {
    const [message, setMessage] = useState ("");

    const handleChange = e=> {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        if (message) {
            props.handleMessageSubmit(message);
            setMessage("");
        }
    };

    return(
        <div>
            <input
            className="field-chat"
            value={message}
            onChange={handleChange}
            placeholder="Your text"
            type="text"/>
            <br />
            <button onClick={handleSubmit} className="button-chat">
                Send
            </button>
        </div>
    )
};

export default MessageBar;