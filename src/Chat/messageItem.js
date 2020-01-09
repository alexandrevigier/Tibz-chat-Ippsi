import React from 'react';
import PropTypes from "prop-types";
import Emoji from 'react-emoji-render';
import '../App.css';

const MessageItem = ({ message }) => {
    return (
        <li className="message-chat">
            <h2 className="message-autor">
                @{message.username}
            </h2>
            <h3>
                <Emoji text={message.body}/>
            </h3>
        </li>
    )
};

MessageItem.propTypes = {
    message: PropTypes.object.isRequired
};

export default MessageItem;