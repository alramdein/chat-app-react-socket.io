import { useEffect, useRef, useState } from "react";
import ioClient from 'socket.io-client'; 

const SOCKET_SERVER_URL = 'http://localhost:3001'
const NEW_MESSAGE_EVENT = 'newMessageEvent'

const useChat = (roomName) => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        // Create a socket connection
        socketRef.current = ioClient(SOCKET_SERVER_URL, {
            query: { 
                roomName: roomName 
            } 
        });

        // Listen for new message
        socketRef.current.on(NEW_MESSAGE_EVENT, (newMessage) => {
            setMessages((messages) => [...messages, newMessage])
        });

        // Destroy the socket reference
        // when the connection is closed
        return () => {
            socketRef.current.disconnect();
        };
    }, [roomName]);

    // Send a message to the server
    const sendMessage = (newMessage) => {
        socketRef.current.emit(NEW_MESSAGE_EVENT, {
            body: newMessage
        })
    }

    return { messages, sendMessage };
}

export default useChat;