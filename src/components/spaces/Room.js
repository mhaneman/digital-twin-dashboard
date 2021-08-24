import './Room.css'

import React from 'react'
import { Link } from 'react-router-dom'

function Room({roomName, currentCount, targetCap, legalCap, doorways, area}) {

    var roomColor = (currentCount / targetCap <= 0.5) ? 250 : Math.floor(250 - (currentCount / targetCap) * 125);
    
    return (
        <Link className = 'link' to={`/dashboard/spaces/${roomName}`}>
            <div className='room' style={{backgroundColor: `rgb(250, ${roomColor}, ${roomColor})`}}>
                <div className='room__roomName'>Room: {roomName} </div>
                <div className="room__roomDetails">
                    <h5>People Count: {currentCount} </h5>
                    <h5>Target Capacity: {targetCap} </h5>
                    <h5>Legal Capacity: {legalCap} </h5>
                    <h5>Doorways: {doorways} </h5>
                    <h5>Area: {area} </h5>
                </div>
            </div>
        </Link>
    
    )
}

export default Room
