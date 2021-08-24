import './Spaces.css'

import React, { useState } from 'react'

import Rooms from './Rooms'
import RoomFilter from './RoomFilter'

function Spaces() {

    const [checkboxState, setCheckboxState] = useState({
        filters: false,
        developer_options: false,
        linear_data: false,
        random_data: false
    });

    const [sliderPercentageState, setSliderPercentageState] = useState(0);
    const [sliderRoomState, setSliderRoomState] = useState([0, 100]);

    return (
        <div className='spaces'>
            <RoomFilter 
                checkboxState = {checkboxState} 
                setCheckboxState = {setCheckboxState} 

                sliderPercentageState = {sliderPercentageState}
                setSliderPercentageState = {setSliderPercentageState}

                sliderRoomState = {sliderRoomState}
                setSliderRoomState = {setSliderRoomState}
            />

            <Rooms 
                checkboxState = {checkboxState}
                sliderPercentageState = {sliderPercentageState}
                sliderRoomState = {sliderRoomState}
            />
        </div>
    )
}

export default Spaces
