import './BuildingBlueprint.css'

import React from 'react'

import Sketch from 'react-p5'

import FakeRoomData from '../../fakeData/room_coords.json'

const drawRoom = (p5, verts) => {
    p5.beginShape()

    verts.map((vert) => (
        p5.vertex(vert[0], vert[1])
    ))

    p5.endShape()
}

function BuildingBlueprint() {
    const setup = (p5, canvasParentRef) => {p5.createCanvas(1000, 1000).parent(canvasParentRef)}

    const draw = p5 => {
        p5.background(112, 171, 175)

        FakeRoomData.map((data) => (
            drawRoom(p5, data.coords)
        ))

        // drawRoom(p5, verts)

        p5.noLoop()
    }
    
    return (
        <div className = 'buildingBlueprint'>
            <Sketch setup={setup} draw={draw}/>
        </div>
    );
}

export default BuildingBlueprint