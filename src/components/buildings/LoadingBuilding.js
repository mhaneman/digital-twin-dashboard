import React from 'react'

function LoadingBuilding() {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
        <mesh ref={mesh} position={[0, 0, 0]}
            onClick = {() => {console.log("clicked")}}
            onPointerEnter = {() => {console.log("hover")}}
        >
            
            <RoundedBox
                ref = {mesh}
                args={[1, 1, 1]} // Width, Height and Depth of the box
                radius={0.05} // Border-Radius of the box
                smoothness={4} // Optional, number of subdivisions
            >
                <meshPhongMaterial attach="material" color="#000000" wireframe />
            </RoundedBox>
        </mesh>
    )
}

export default LoadingBuilding
