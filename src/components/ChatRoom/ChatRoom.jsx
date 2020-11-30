import React from 'react';
import useChat from '../../hooks/useChat';

const ChatRoom = () => {
    const { messages, sendMessage } = useChat();
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
            <h1 className="room-id">Chat Room ID: </h1>
            <div className="message-container">
                <ol className="message-list">
                    {messages.map((message, index) => (
                        <li 
                        key={index}
                        className="message-item"
                        >
                            {console.log(message.body)}
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