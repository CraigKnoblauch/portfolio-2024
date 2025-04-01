import { Canvas } from "@react-three/fiber"
import Experience from "src/components/Experience.jsx"
import { KeyboardControls, OrbitControls } from "@react-three/drei"
import { isMobile } from "react-device-detect"
import MobileInterface from "src/components/MobileInterface.jsx"


function App() {

  return (
    <>
      <KeyboardControls
        map={ [
          { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
          { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
          { name: 'left', keys: [ 'ArrowLeft', 'KeyA' ] },
          { name: 'right', keys: [ 'ArrowRight', 'KeyD' ] },
          { name: 'enter', keys: [ 'Enter' ] }
        ] }
      >
        {/* NOTE Camera position to debug rocket: [3, 3, -40] */}
        {/* NOTE Camera position to debug flames shader: [1.6, 5.9, -32.4] */}
        {/* NOTE Starting camera position before beta release: [3, 1, 2] */}
        <Canvas camera={{ position: [3, 1, 2], fov: 50 }}>
            <OrbitControls />
          <Experience />
        </Canvas>

      </KeyboardControls> 
      {isMobile && <MobileInterface />} 
      
    </>
  )
}

export default App
