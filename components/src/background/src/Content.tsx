import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import isEqual from 'fast-deep-equal'
import React from 'react'
import useRefs from 'react-use-refs'
import { MathUtils } from 'three'

interface ContentProps {}

const rsqw = (t: number, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)

const MacBook = React.forwardRef(({ ...props }: any, ref: any) => {
  const { nodes, materials } = useGLTF('/mbp-v1-pipe.glb') as any

  return (
    <group {...props} dispose={null}>
      <group
        ref={ref}
        position={[0, -0.43, -11.35]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh
          geometry={nodes.back_1.geometry}
          material={materials.blackmatte}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.back_2.geometry}
          material={materials.aluminium}
        />
        <mesh geometry={nodes.matte.geometry}>
          {/* <meshLambertMaterial map={texture} toneMapped={false} /> */}
        </mesh>
      </group>
      <mesh
        geometry={nodes.body_1.geometry}
        material={materials.aluminium}
        material-color="#aaaaaf"
        material-envMapIntensity={0.2}
      />
      <mesh geometry={nodes.body_2.geometry} material={materials.blackmatte} />
    </group>
  )
})

MacBook.displayName

const Content: React.FC<ContentProps> = (props) => {
  const scroll = useScroll()
  const { width, height } = useThree((state) => state.viewport)
  const [group, mbp16, keyLight, stripLight, fillLight] = useRefs<any>()
  useFrame((_, delta) => {
    const r1 = scroll.range(0 / 4, 1 / 4)
    const r2 = scroll.range(1 / 4, 3 / 4)

    // info : 맥북 펼쳐지는 각도
    mbp16.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) + r2 * -0.23

    // mbp14.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) - r2 * 0.39

    // info : 백북 돌아가는 각도
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      (-Math.PI / 1) * 2 * r2,
      4,
      delta
    )
    // group.current.position.x = MathUtils.damp(
    //   group.current.position.x,
    //   (-width / 7) * r2,
    //   4,
    //   delta
    // )
    group.current.scale.x =
      group.current.scale.y =
      group.current.scale.z =
        MathUtils.damp(
          group.current.scale.z,
          1 + 0.1 * (1 - rsqw(r1)),
          4,
          delta
        )

    keyLight.current.position.set(
      0.25 + -15 * (1 - r1),
      4 + 11 * (1 - r1),
      3 + 2 * (1 - r1)
    )
  })
  return (
    <>
      <spotLight position={[0, -width * 0.7, 0]} intensity={0.5} />
      <directionalLight ref={keyLight} castShadow intensity={6}>
        <orthographicCamera
          attach={'camera'}
          args={[-10, 10, 10, -10, 0.5, 30]}
        />
      </directionalLight>
      <group ref={group} position={[0, -height / 2.65, 0]} {...props}>
        <spotLight
          ref={stripLight}
          position={[width * 2.5, 0, width]}
          angle={0.19}
          penumbra={1}
          intensity={0.25}
        />
        <spotLight
          ref={fillLight}
          position={[0, -width / 2.4, -width * 2.2]}
          angle={0.2}
          penumbra={1}
          intensity={2}
          distance={width * 3}
        />
        <MacBook ref={mbp16} scale={width / 67} />
        {/* <MacBook
          ref={mbp14}
          scale={width / 77}
          rotation={[0, Math.PI, 0]}
          position={[0, 0, -width / 2.625]}
        /> */}
      </group>
    </>
  )
}

export default React.memo(Content, isEqual)
