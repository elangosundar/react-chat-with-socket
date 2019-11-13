import React, { useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';
    useEffect(() => {
        // location : url으로서 router가 전달해준다.
        const { name, room } = queryString.parse(location.search);
        
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        // 1번만 렌더되기 위해 사용
    }, [ENDPOINT, location.search])
    return(
        <h1>Chat</h1>
    )
}

export default Chat;