import './Rooms.css'

import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Room from './Room'
import FakeLinearRoomData from '../../fakeData/linear_rooms.json'
import FakeRandomRoomData from '../../fakeData/random_rooms.json'


function Rooms({checkboxState, sliderPercentageState, sliderRoomState}) {

    const smartCampusAPI = 'https://smartcampus.city/api/data/'
    const [roomData, setRoomData] = useState(null);

    useEffect(() => {
        axios.get(smartCampusAPI)
        .then(response => 
            {
                setRoomData(response.data)
            });
    }, [smartCampusAPI]);

    // display data when api call returns OR using fake api calls
    if (roomData || checkboxState.linear_data || checkboxState.random_data)
    {
        let rooms;
        if (checkboxState.linear_data)
            rooms = Object.entries(FakeLinearRoomData.locations);

        if (checkboxState.random_data)
            rooms = Object.entries(FakeRandomRoomData.locations);

        if (!checkboxState.linear_data && !checkboxState.random_data)
            rooms = Object.entries(roomData.locations)
        

        return (
            <div className='rooms' >
                { rooms
                    .filter(room => (room[1].count / (room[1].target_capacity == null ? 100 : room[1].target_capacity)) * 100 >= sliderPercentageState)
                    .filter(room => (room[1].count >= sliderRoomState[0] && room[1].count <= sliderRoomState[1]))
                    .map((room) => (
                        <Room 
                            roomName = {room[0] } 
                            currentCount = {room[1].count }
                            targetCap = {room[1].target_capacity }
                            legalCap = {room[1].legal_capacity }
                            doorways = {room[1].doorways }
                            area = {room[1].area } 
                        />
                ))}
            </div>
        )
    }

    // return loading if api data hasn't come back yet
    return (
        <div className = 'loading'>
            Loading Data ....
        </div>

    )

}

export default Rooms
