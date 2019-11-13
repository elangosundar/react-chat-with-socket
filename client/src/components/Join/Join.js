import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)}/></div>
                {/* name 과 room 값이 비어있는 경우 방지 */}
                <Link onClick={evnet => ( !name || !room) ? evnet.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button" type="submit">Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;