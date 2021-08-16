import './BuildingBlueprint.css'

import React, { useRef, useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import { extend, Canvas, useFrame} from '@react-three/fiber'
// import { Outline } from '@react-three/postprocessing'
import { OrbitControls, Sky, Extrude, Text } from '@react-three/drei'

import { Shape, LineBasicMaterial} from 'three'

import FakeRoomData from '../../fakeData/room_coords.json'


let worldCamera = {position: [0, 150, 0], fov: 60 };

const lineMaterial = new LineBasicMaterial( {
	color: 0xffffff,
	linewidth: 1,
	linecap: 'round', //ignored by WebGLRenderer
	linejoin:  'round' //ignored by WebGLRenderer
} );

const GenerateBuildingShape = (coordinates) => {

    // const length = 12, width = 8;
    // const shape = new Shape();
    // shape.moveTo( 0, 0);
    // shape.lineTo( 0, width);
    // shape.lineTo( length , width );
    // shape.lineTo( length, 0 );
    // shape.lineTo( 0, 0 );

    const shape = new Shape();
    shape.moveTo(0, 0);
    coordinates.map((coordinate) => (
        shape.lineTo(coordinate[0], coordinate[1])
    ));

    return shape;
}

const BuildingShape = ({roomName, position, coordinates, history}) => {

    const shape = GenerateBuildingShape (coordinates);
    const extrudeSettings = useMemo(() => ({
        steps: 1,
        depth: 16,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 1,
        bevelOffset: 0,
        bevelSegments: 1,
        
    }), [])
      
    return (
        <mesh 
            onDoubleClick = {() => history.push(`/dashboard/spaces/${roomName}`)}
        >
            <Text
                color={'#EC2D2D'}
                fontSize={5}
                maxWidth={100}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'right'}

                position = {[position[0], position[1] + 16, position[2]]}
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

                <meshPhongMaterial attach="material" color="#efefef" wireframe />

            </Extrude>

        </mesh>
    );
}

function BuildingBlueprint() {
    const history = useHistory();

    return (
        <div className = 'buildingBlueprint'>
            <Canvas camera = {worldCamera} >
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

                <OrbitControls />

            </Canvas>
        </div>
    );
}

export default BuildingBlueprint