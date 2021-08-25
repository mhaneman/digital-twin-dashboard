import './OccupancyGrid.css'

import React from 'react'

function OccupancyGrid() {
    var roomOccupancyValues = Array.from({length: 98}, () => Math.floor(Math.random() * 40));
    return (
        <div className='occupancyGrid'>

            <div className="occupancyGrid__days">
                <h5> Mon </h5>
                <h5> Tues </h5>
                <h5> Wed </h5>
                <h5> Thurs </h5>
                <h5> Fri </h5>
                <h5> Sat </h5>
                <h5> Sun </h5>
            </div>

            <div className="occupancyGrid__times">
                <h5> 6a </h5>
                <h5> 7a </h5>
                <h5> 8a </h5>
                <h5> 9a </h5>
                <h5> 10a </h5>
                <h5> 11a </h5>
                <h5> 12p </h5>
                <h5> 1p </h5>
                <h5> 2p </h5>
                <h5> 3p </h5>
                <h5> 4p </h5>
                <h5> 5p </h5>
                <h5> 6p </h5>
                <h5> 7p </h5>
            </div>

            <div className="occupancyGrid__data">
                {
                    roomOccupancyValues.map((occupancy) => (
                        <div className="occupancyGrid__room" style={{backgroundColor: `rgb(250, ${Math.floor(250 - occupancy)}, ${Math.floor(250 - occupancy)})`}}>
                            {occupancy}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default OccupancyGrid
