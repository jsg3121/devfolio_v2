import React from 'react'
import isEqual from 'fast-deep-equal'
import { useFrame } from '@react-three/fiber'
import { Instance, Instances } from '@react-three/drei'
import { MathUtils } from 'three'

interface BubblesProps {}

const particles = Array.from({ length: 180 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.3, 1),
  xFactor: MathUtils.randFloatSpread(120),
  yFactor: MathUtils.randFloatSpread(120),
  zFactor: MathUtils.randFloatSpread(120),
}))

const Bubble: React.FC = (props) => {
  const { factor, speed, xFactor, yFactor, zFactor } = props as any
  const ref = React.useRef<any>(null)

  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2)
    if (ref.current) {
      ref.current.scale.setScalar(Math.max(1.3, Math.cos(t) * 1.8))

      ref.current.position.set(
        Math.cos(t) +
          Math.sin(t * 1) / 10 +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        Math.sin(t) +
          Math.cos(t * 2) / 10 +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        Math.sin(t) +
          Math.cos(t * 2) / 10 +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      )
    }
  })
  return <Instance ref={ref} />
}

const Bubbles: React.FC<BubblesProps> = () => {
  const ref = React.useRef<any>(null)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = MathUtils.damp(
        ref.current.rotation.y,
        (-state.mouse.x * Math.PI) / 6,
        2.75,
        delta
      )

      ref.current.rotation.x = MathUtils.damp(
        ref.current.rotation.x,
        (-state.mouse.y * Math.PI) / 6,
        2.75,
        delta
      )
    }
  })
  return (
    <group>
      <color attach="background" args={['#ffffff']} />
      <ambientLight intensity={1.5} />
      <pointLight position={[100, 100, 100]} intensity={50} color="blue" />
      <Instances
        limit={particles.length}
        ref={ref}
        castShadow
        receiveShadow
        position={[0, 0, 0]}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial roughness={0} color="#efefef" />
        {particles.map((data, i) => (
          <Bubble key={i} {...data} />
        ))}
      </Instances>
    </group>
  )
}

export default React.memo(Bubbles, isEqual)
