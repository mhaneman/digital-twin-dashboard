import './Spaces.css'

import React, { useState } from 'react'

import Locations from './Locations'
import LocationFilter from './LocationFilter'

function Spaces() {

    const [checkboxState, setCheckboxState] = useState({
        filters: false,
        developer_options: false,
        linear_data: false,
        random_data: false
    });

    const [sliderPercentageState, setSliderPercentageState] = useState(0);
    const [sliderLocationState, setSliderLocationState] = useState([0, 100]);

    return (
        <div className='spaces'>
            <LocationFilter 
                checkboxState = {checkboxState} 
                setCheckboxState = {setCheckboxState} 

                sliderPercentageState = {sliderPercentageState}
                setSliderPercentageState = {setSliderPercentageState}

                sliderLocationState = {sliderLocationState}
                setSliderLocationState = {setSliderLocationState}
            />

            <Locations 
                checkboxState = {checkboxState}
                sliderPercentageState = {sliderPercentageState}
                sliderLocationState = {sliderLocationState}
            />
        </div>
    )
}

export default Spaces
