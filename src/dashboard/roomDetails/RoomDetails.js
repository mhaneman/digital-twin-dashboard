import './RoomDetails.css'

import React from 'react'

import OccupancyGrid from './OccupancyGrid'
import RoomGraph from './RoomGraph'

function RoomDetails() {

    const liveEventsData = [{name: 'Occupancy', value: '4'}, {name: '% Full', value: '100'}, {name: 'Entrances', value: '3'}, {name: 'Exits', value: '4'}]
    const liveEventsPlot = [{valueX: '1', valueY: '1'}, {valueX: '2', valueY: '2'}, {valueX: '3', valueY: '3'}, {valueX: '4', valueY: '4'}]

    const dailyOccupancyData = [{name: 'Capacity', value: '4'}, {name: 'Peak', value: '10'}]
    const dailyOccupancyPlot = [{valueX: '1', valueY: '1'}, {valueX: '2', valueY: '2'}, {valueX: '3', valueY: '3'}, {valueX: '4', valueY: '4'}]

    return (
        <div className = 'roomDetails'>

            <div className="roomDetails__header">
                <div className="roomDetails__header__roomNumber">
                    <h1> Room 210 </h1>
                </div>

                <div className="roomDetails__header__details">
                    <div className="roomDetails__header__details__item">
                        <h3> Target Capacity </h3>
                        <h4> 100 </h4>
                    </div>

                    <div className="roomDetails__header__details__item">
                        <h3> Legal Capacity </h3>
                        <h4> 200 </h4>
                    </div>

                    <div className="roomDetails__header__details__item">
                        <h3> Doorways </h3>
                        <h4> 1 </h4>
                    </div>

                    <div className="roomDetails__header__details__item">
                        <h3> Sensors </h3>
                        <h4> 1 </h4>
                    </div>
                    
                    <div className="roomDetails__header__details__item">
                        <h3> Size Area </h3>
                        <h4> 1000 </h4>
                    </div>
                </div>
            </div>

            <div className="roomDetails__body">
                <div className="roomDetails__body__left">
                    <h2>Average Peak Occupancy per Hour</h2>
                    <OccupancyGrid />
                </div>

                <div className="roomDetails__body__right">
                    <RoomGraph title='Live Events' details={liveEventsData} plot={liveEventsPlot}/>
                    <RoomGraph title='Daily Occupancy' details={dailyOccupancyData} plot={dailyOccupancyPlot}/>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails
