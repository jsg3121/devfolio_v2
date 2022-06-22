import React from 'react'
import isEqual from 'fast-deep-equal'
import { useFrame } from '@react-three/fiber'
import { Instance, Instances } from '@react-three/drei'
import { MathUtils } from 'three'

interface BubblesProps {}

const particles = Array.from({ length: 200 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.3, 1),
  xFactor: MathUtils.randFloatSpread(100),
  yFactor: MathUtils.randFloatSpread(100),
  zFactor: MathUtils.randFloatSpread(100),
}))

const Bubble: React.FC = (props) => {
  const { factor, speed, xFactor, yFactor, zFactor } = props as any
  const ref = React.useRef<any>(null)
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2)
    if (ref.current) {
      ref.current.scale.setScalar(Math.max(1, Math.cos(t) * 0.1))

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

const Bubbles: React.FC<BubblesProps> = (props) => {
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
  )
}

export default React.memo(Bubbles, isEqual)
