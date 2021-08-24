import './Summary.css'

import React from 'react'

function Summary() {
    return (
        <div className = 'summary'>
            <div className="summary__macroStats">
                <h3> Average Room Occupancy Percentage: 300%</h3>
                <h3> Total Numer of people detected: 192,340 </h3>
                <h3> Number of new Covid-19 Cases: 3,320 </h3>
                <h3> Number of Over Occupied Rooms: 3,320 </h3>
            </div>
        </div>
    )
}

export default Summary
