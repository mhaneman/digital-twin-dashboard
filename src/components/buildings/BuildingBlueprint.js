import './BuildingBlueprint.css'

import React, { useRef, useMemo, useState} from 'react'

import { useHistory } from 'react-router-dom'

import { Canvas } from '@react-three/fiber'

import { MapControls, Sky, Extrude, Text, Line } from '@react-three/drei'

import { Shape } from 'three'

import FakeRoomData from '../../fakeData/room_coords.json'


let worldCamera = {position: [0, 150, 0], fov: 60 };

const GenerateBuildingShape = (coordinates) => {

    const shape = new Shape();
    shape.moveTo(0, 0);
    coordinates.map((coordinate) => (
        shape.lineTo(coordinate[0], coordinate[1])
    ));

    return shape;
}

const BuildingShape = ({roomName, position, coordinates, history}) => {

    const [lineColor, setLineColor] = useState("#000000");


    const [roomOpacity, setRoomOpacity] = useState(0.5);
    const [roomColor, setRoomColor] = useState("black");


    const shape = GenerateBuildingShape (coordinates);

    const extrudeSettings = useMemo(() => ({
        steps: 1,
        depth: 16,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 1,
        bevelOffset: 0,
        bevelSegments: 1,
        
    }), []);

    return (
        <mesh 
            onDoubleClick = {() => history.push(`/dashboard/spaces/${roomName}`)}
            onPointerOver = {() => {
                setLineColor("#ffffff")
                setRoomOpacity(0.2)
            }}

            onPointerOut = {() => {
                setLineColor("#000000")
                setRoomOpacity(0.5)
            }}
        >
            <Text
                color={'#EC2D2D'}
                fontSize={5}
                maxWidth={100}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'right'}

                position = {[position[0], position[1] + 16.1, position[2]]}
                rotation = {[-Math.PI / 2, 0, 0]}

                anchorX="left"
                anchorY="bottom"
            >
                {roomName}
            </Text>
            
            <Extrude 
                args={[shape, extrudeSettings]} 
                rotation = {[-Math.PI / 2, 0, 0]} 
                position = {position}
            >
                <meshLambertMaterial 
                    attach = "material" 
                    color = {roomColor} 
                    transparent = {true} 
                    opacity = {roomOpacity}
                />

            </Extrude>

            <Line
                position = {position}
                rotation = {[Math.PI, 0, 0]}
                points = {coordinates.map((coordinate) => [coordinate[0], 0, coordinate[1]])} // convert to 3d vector
                color = {lineColor}                   
                lineWidth = {1}                   
                dashed = {false}
            />

            <Line
                position = {position}
                rotation = {[Math.PI, 0, 0]}
                points={coordinates.map((coordinate) => [coordinate[0], -16, coordinate[1]])} // convert to 3d vector
                color = {lineColor}                   
                lineWidth={1}                   
                dashed={false}
            />

        </mesh>
    );
}

function BuildingBlueprint() {
    const history = useHistory();

    return (
        <div className = 'buildingBlueprint'>

            <Canvas camera={worldCamera} alpha={true}>

                <ambientLight intensity = {0.5} />

                {
                    FakeRoomData.map((room) => (
                        <BuildingShape
                            roomName = {room.room} 
                            position = {room.position} 
                            coordinates = {room.coordinates}
                            history = {history}
                        />
                    ))
                }

                <Sky
                    distance={450000} // Camera distance (default=450000)
                    sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
                    inclination={0} // Sun elevation angle from 0 to 1 (default=0)
                    azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
                />

                <MapControls />

            </Canvas>
        </div>
    );
}

export default BuildingBlueprint