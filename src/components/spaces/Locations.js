import './Locations.css'

import React, {useState, useEffect} from 'react'
import axios from 'axios'

import FakeLinearLocationData from '../../fakeData/linear_locations.json'
import FakeRandomLocationData from '../../fakeData/random_locations.json'

import { Link } from 'react-router-dom'

function Location({name, currentCount, targetCap, legalCap, doorways, area}) {
    var locationColor = [0, 0, 0];

    if (currentCount / targetCap <= 0.3) {
        locationColor[1] = 255;
        locationColor[0] = 128 + Math.floor(currentCount / targetCap) * 255;
        locationColor[2] = 128 + Math.floor(currentCount / targetCap) * 255;
    } else if (currentCount / targetCap <= 0.6) {
        locationColor[0] = 255;
        locationColor[1] = 255;
        locationColor[2] = 128 + Math.floor(currentCount / targetCap) * 255;
    } else {
        locationColor[0] = 255;
        locationColor[1] = Math.floor(250 - (currentCount / targetCap) * 125);
        locationColor[2] = Math.floor(250 - (currentCount / targetCap) * 125);
    }
    
    return (
        <Link className = 'link' to={`/dashboard/spaces/${name.replace(' ', '')}`}>
            <div className='location' style={{backgroundColor: `rgb(${locationColor[0]}, ${locationColor[1]}, ${locationColor[2]})`}}>
                <div className='location__locationName'> {name} </div>
                <div className="location__locationDetails">
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

function Locations({checkboxState, sliderPercentageState, sliderLocationState}) {

    const smartCampusAPI = 'https://smartcampus.city/api/data/'
    const [locationData, setlocationData] = useState(null);

    useEffect(() => {
        axios.get(smartCampusAPI)
        .then(response => 
            {
                setlocationData(response.data)
            });
    }, [smartCampusAPI]);

    // display data when api call returns OR using fake api calls
    if (locationData || checkboxState.linear_data || checkboxState.random_data)
    {
        let locations;
        if (checkboxState.linear_data)
            locations = FakeLinearLocationData.locations

        if (checkboxState.random_data)
            locations = FakeRandomLocationData.locations

        if (!checkboxState.linear_data && !checkboxState.random_data)
            locations = locationData.locations
        

        return (
            <div className='locations' >
                { locations
                    .filter(location => (location.count / (location.target_capacity == null ? 100 : location.target_capacity)) * 100 >= sliderPercentageState)
                    .filter(location => (location.count >= sliderLocationState[0] && location.count <= sliderLocationState[1]))
                    .map((location) => (
                        <Location
                            key = { location.name.replace(' ', '') }
                            name = { location.name } 
                            currentCount = { location.count }
                            targetCap = { location.target_capacity }
                            legalCap = { location.legal_capacity }
                            doorways = { location.doorways }
                            area = { location.area } 
                        />
                ))}
            </div>
        )
    }

    // return loading if api data hasn't come back yet
    return (
        <div className = 'loading'>
            Loading Data ...
        </div>

    )

}

export default Locations
