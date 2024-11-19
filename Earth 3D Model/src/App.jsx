import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Stars, Loader } from '@react-three/drei'
import Earth from '../public/Earth-model'
import './App.css'

function App() {

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Sky
            distance={450000} // Default is 450000, adjusts the size of the sky dome
            sunPosition={[0, 1, 0]} // Move the sun out of the view
            turbidity={0} // Clear sky
            rayleigh={0} // Remove blue light scattering
            inclination={0} // Sun position in the sky
            azimuth={0.25} // Position around horizon
          />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          <Earth />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}

export default App;