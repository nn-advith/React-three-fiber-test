import React from "react";

import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader";
import texture from "../images/map.jpg";

function Box() {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry args={[3, 3, 3]} />
      {/* <meshLambertMaterial attach="material" /> */}
      {/* <meshStandardMaterial normalMap={colorMap} /> */}
      <meshNormalMaterial />

      {/* <boxGeometry args={[1, 2, 3]} />
      <meshStandardMaterial color='orange' /> */}
    </mesh>
  );
}

export default Box;
