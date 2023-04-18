import {
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useState,
  useImperativeHandle,
} from 'react'
import { useSpring, animated } from '@react-spring/three'
import { Canvas, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Box } from '@react-three/drei'
import { Vector2 } from 'three'
import { DiceModel } from './DiceModel'
import {socket} from "./socket"

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)


const MyScene = forwardRef(({}, ref) => {
  const isOver = useRef(false)
  const [vector2] = useState(() => new Vector2())
const Ground = () => {
    return (
      <mesh receiveShadow   position={[0,-.9,0]} rotation-x={Math.PI * -0.5}>
        <planeBufferGeometry   args={[20, 20]} />
        <meshStandardMaterial  color={"pink"} />
      </mesh>
    );
  }
const BackWall = () => {
    return (
      <mesh receiveShadow  position={[0,-.9,-1.2]} rotation-x={Math.PI * 0}>
        <planeBufferGeometry    args={[20, 20]} />
        <meshStandardMaterial   color={"gray"} />
      </mesh>
    );
  }

  const { width, height } = useThree(state => state.size)
const [randomRotate, setRandomRotate]= useState([0,0,0])
const [dataRecieved, setDataRecieved] = useState(false);
const rotater = ()=> {
  const ran0 = randomIntFromInterval(0, 3)
  const ran1 = randomIntFromInterval(0, 3)
  const ran3 = randomIntFromInterval(0, 3)
  
 
  let newNumber = ran0 * Math.PI
  let newNumber1 = ran1 * Math.PI
  let newNumber2 = ran3 * Math.PI
  console.log(ran0,ran1, "!!!!")
  // setRandomRotate([newNumber,newNumber, newNumber])
  setRandomRotate([newNumber1,newNumber, newNumber2])
}
// setTimeout(() => {
//   rotater()
//   console.log("timeout")
// }, 3000);
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)/2
}



  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      color: 'hotpink',
position: [0,0,0]     ,
rotation: [0,0,0],
onChange: ({ value }) => {
//  console.log(value, "the value")
},
      config: key => {
        switch (key) {
          case 'scale':
            return {
              mass: 4,
              friction: 10,
            }
          case 'position':
            return {  tension: 170, friction: 60  }
          default:
            return {
              mass: 2,
              tension: 100,
              friction: 30
            }
        }
      },
    }),
    []
  )

  const handleClick = useCallback(() => {
    let clicked = false

    return () => {
      clicked = !clicked
      api.start({
        color: clicked ? 'hotpink' : 'red',
        // scale: clicked ? 1 : 3,
        position: clicked ? [0,0,0]: [0,1,0],
        // rotation:clicked ? [0,0,0]: [randomRotate[0],randomRotate[0],randomRotate[2]]
      })
    }
  }, [randomRotate])

 

  const handlePointerMove = useCallback(
    e => {
 
        api.start({
          // position: [0, randomRotate[2],0],
          rotation: [randomRotate[0], randomRotate[2],0]
        })
   
    },
    [api, width, height, randomRotate]
  )


  useEffect(() => {
    handlePointerMove()
    socket.on('connect',console.log("we connected"));
    socket.on("random", (data)=> {
      console.log(data, "random data")
      setRandomRotate(data)
    })
    
    // window.addEventListener('pointermove', handlePointerMove)
handlePointerMove();
    return () => {
handlePointerMove()
      // window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [ handlePointerMove,randomRotate])

  

  return (
    < >

    <animated.mesh
 castShadow 
    position={springs.position}
    scale={springs.scale}
    rotation={springs.rotation}
onClick={handleClick()}
      >
      {/* <boxGeometry   args={[.1, .1, .1]} /> */}
      <animated.meshStandardMaterial
        speed={5}
    
        color={springs.color}
      />
<DiceModel/>
    </animated.mesh>
    <Ground />
    <BackWall/>
    </>
  )
})

export default function App() {


  return (
    <div style={{height: "100vh", width: "100vw"}}>

    <Canvas 
  shadows 
    >
      <OrbitControls/>
      <ambientLight     intensity={0.2} />
      <pointLight castShadow // highlight-line
 intensity={1} position={[0, 3, 3]} lookAt={[0,0,0]} />
      <MyScene />
    </Canvas>
    </div>
  )
}
