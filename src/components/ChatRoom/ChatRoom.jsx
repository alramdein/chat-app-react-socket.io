import React from 'react';
import useChat from '../../hooks/useChat';
import { useHistory } from "react-router-dom";

const ChatRoom = (props) => {
    const history = useHistory();
    const roomName = props.location.data;

    // redirect to welcome page
    // if roomName is not inserted
    if(roomName === undefined) {
        history.push('/');
    }

    const { messages, sendMessage } = useChat(roomName);
    const [newMessage, setNewMessage] = React.useState("");

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    }

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    }

    return (
        <div className="chat-room-container">
            <h1 className="room-id">Room Name: {roomName}</h1>
            <div className="message-container">
                <ol className="message-list">
                    {messages.map((message, index) => (
                        <li 
                        key={index}
                        className="message-item"
                        >
                            {message.body}
                        </li>
                    ))}
                </ol>
            </div>
            <textarea
                value={newMessage}
                onChange={handleNewMessageChange}
                placeholder="Write message..."
                className="message-input-field"
            />
                <button onClick={handleSendMessage} className="send-message-button">
                    Send
                </button>
        </div>
    )
}

export default ChatRoom;