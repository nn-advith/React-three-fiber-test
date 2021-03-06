/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Aullwen (https://sketchfab.com/Aullwen)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/laptop-7d870e900889481395b4a575b9fa8c3e
title: Laptop
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/lap.gltf')
  return (
    <mesh scale={0.7} rotation={[30*Math.PI/180, -30*Math.PI/180, 0 ]}>
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.98, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Frame_ComputerFrame_0.geometry} material={materials.ComputerFrame} />
          </group>
          <group position={[0, 0.65, -10.3]} rotation={[Math.PI, 0, -Math.PI]} scale={[100, 90, 70]}>
            <mesh geometry={nodes.Screen_ComputerScreen_0.geometry} material={materials.ComputerScreen} />
          </group>
        </group>
      </group>
    </group>
    </mesh>
  )
}

useGLTF.preload('/lap.gltf')
