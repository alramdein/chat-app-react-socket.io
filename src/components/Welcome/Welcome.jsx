import React from 'react';
// import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Welcome = () => {
    const [roomName, setRoomName] = React.useState("");
    // const history = useHistory();
    
    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    }

    // const handleJoinRoom = () => {
        // history.push({
        //     pathname: '/chat-room',
        //     data: roomName
        // });
    // }

    return (
        <div className="chat-room-container">
            <h1 className="room-id">Enter Room Name: </h1>
            <div className="message-container">
               
            </div>
            <input type="text" name="roomName" value={roomName} onChange={handleRoomNameChange} placeholder="Enter room name..."/>
            {/* <button onClick={handleJoinRoom} className="send-message-button">
                Join
            </button> */}
            <Link to={{pathname:'/chat-room', data: roomName}}>
                Join
            </Link>
        </div>
    )
}

export default Welcome;