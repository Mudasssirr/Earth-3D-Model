/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 earth-model.gltf 
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-f7a76c63ff1846afb2d606e5c8369c15
Title: Earth
*/

import React from 'react'
import { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/earth-model.gltf')
  const [scale, setScale] = useState(1.5);


  // Function to change the width of the Earth when opened on a phone
  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width > 400) {
        setScale(2);
      } else {
        setScale(1.5);
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={scale} />
    </group>
  )
}

useGLTF.preload('/earth-model.gltf')
