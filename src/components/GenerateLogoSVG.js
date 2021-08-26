import './GenerateLogoSVG.css'

import React from 'react'

const GenerateLogoSVG = () => {
    const origin = {x: 60, y: 140};
    const k = -20;
    const width = -40;
    const height = -100;

    const frontFace = [
        [origin.x, origin.y],
        [origin.x + width + k, origin.y + k],
        [origin.x + width + k, origin.y + height + k],
        [origin.x, origin.y + height],
        [origin.x, origin.y]
    ]

    const topFace = [
        [origin.x + width - 2*k, origin.y + height + 2*k],
        [origin.x + width + k, origin.y + height + k],
        [origin.x, origin.y + height],
        [origin.x - 3*k, origin.y + height + 1*k],
    ];

    const bottomFace = [
        [origin.x + width - 2*k, origin.y + 2*k],
        [origin.x + width + k, origin.y + k],
        [origin.x, origin.y],
        [origin.x - 3*k, origin.y + 1*k],
    ];

    return (
        < svg className="logo" viewBox="0 0 130 140" preserveAspectRatio="xMinYMin meet">
            <polyline className="logo__bottomFace" points={bottomFace} />
            <polyline className="logo__frontFace" points={frontFace} /> 
            <polyline className="logo__topFace" points={topFace} />  
        </svg>

    );
}

export default GenerateLogoSVG;