import './LocationGraph.css'

import React from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.plugins.legend = false;

function LocationGraph({title, details, plot}) {

    const DATA_LENGTH = 100;


    var data = {
        labels: new Array(DATA_LENGTH).fill(''),
        datasets: [{
            label: '',
            data: Array.from(Array(DATA_LENGTH)).map(x=>Math.random()),
            fill: false,
            backgroundColor: 'rgb(119, 197, 145)',
            borderColor: 'rgba(119, 197, 145, 0.2)',
        },],
      };

    return (
        <div className='locationGraph'>

            <div className="locationGraph__title">
                <h3>{title}</h3>
            </div>

            <div className="locationGraph__details">
                {
                    details.map((detail) => (
                        <div className="locationGraph__details__item">
                            <h4> {detail.name} </h4>
                            <h5> {detail.value} </h5>
                        </div>
                    ))
                }
            </div>

            <Line 
                className = 'locationGraph__graph'
                data = {data} 
                options = {{
                    scales: 
                    {
                        x: { ticks: { display: false }, grid:{ display: false, drawBorder: false} },
                        y: { ticks: { display: false }, grid:{ display: false, drawBorder: false} },
                    },
                }}
            />
            
        </div>
    )
}

export default LocationGraph
