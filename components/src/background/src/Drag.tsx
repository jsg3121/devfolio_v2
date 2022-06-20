import { extend, useThree } from '@react-three/fiber'
import isEqual from 'fast-deep-equal'
import React from 'react'
import { Group } from 'three'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
extend({ OrbitControls })

extend({ DragControls })

interface DragProps {
  children: React.ReactNode
}

const Drag: React.FC<DragProps> = (props) => {
  const { children } = props
  const [objects, setObjects] = React.useState<any>()
  const groupRef = React.useRef<Group>(null)

  const { camera, gl, scene } = useThree()

  React.useEffect(() => {
    if (groupRef.current?.children) {
      setObjects(groupRef.current.children)
    }
  }, [groupRef])

  React.useEffect(() => {
    const controls = new DragControls(objects, camera, gl.domElement)

    return () => {
      controls.dispose()
    }
  }, [camera, gl.domElement, objects])

  React.useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)

    if (groupRef.current) {
      groupRef.current.addEventListener('hoveron', () => {})
      groupRef.current.addEventListener('hoveroff', () => {})
    }
  }, [camera, gl.domElement, objects, scene])
  return (
    <>
      <group ref={groupRef}>{children}</group>
    </>
  )
}

export default React.memo(Drag, isEqual)
