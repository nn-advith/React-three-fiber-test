import Reacr from "react";

import {Sphere, MeshDistortMaterial} from "@react-three/drei";

export default function AnimatedSphere() {
    return <Sphere visible args={[1,100,200]} rotation={[0,0,90]} scale={2}>
        <MeshDistortMaterial color="#8353fd"  speed={10} roughness={0} transparent={true}/>
    </Sphere>

}