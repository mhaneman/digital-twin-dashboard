import './RoomGraph.css'

import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import { PlayCircleFilledWhite } from '@material-ui/icons';

defaults.plugins.legend = false;
// defaults.borderColor = "white";

function RoomGraph({title, details, plot}) {

    const DATA_LENGTH = 100;


    var data = {
        labels: new Array(DATA_LENGTH).fill(''),
        datasets: [{
            label: '',
            data: Array.from(Array(DATA_LENGTH)).map(x=>Math.random()),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },],
      };

    return (
        <div className='roomGraph'>

            <div className="roomGraph__title">
                <h3>{title}</h3>
            </div>

            <div className="roomGraph__details">
                {
                    details.map((detail) => (
                        <div className="roomGraph__details__item">
                            <h4> {detail.name} </h4>
                            <h5> {detail.value} </h5>
                        </div>
                    ))
                }
            </div>

            <Line 
                data = {data} 
                options = {{
                    scales: 
                    {
                        x: { ticks: { display: false }, grid:{ display: false, drawBorder: false} },
                        y: { ticks: { display: false }, grid:{ display: false, drawBorder: false} },
                    },

                    borderColor: "white"
                    // elements: { point: { radius: 0 } }
                }}
            />
            
        </div>
    )
}

export default RoomGraph
