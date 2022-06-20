import React from 'react'
import isEqual from 'fast-deep-equal'
import { extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Control: React.FC = () => {
  const { camera, gl } = useThree()

  React.useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)

    return () => {
      controls.dispose()
    }
  }, [camera, gl.domElement])

  return null
}

export default React.memo(Control, isEqual)
