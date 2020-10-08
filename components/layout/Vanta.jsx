import { useState, useEffect, useRef } from 'react'

import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.net.min.js'

export default function Vanta() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fa4ff,
          backgroundColor: 0xffffff,
          points: 10.0,
          maxDistance: 21.0,
          spacing: 20.0,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={myRef}
      style={{
        width: '100%',
        height: '20rem',
        marginTop: '-15rem',
        zIndex: '-1',
        objectFit: 'cover',
      }}
    />
  )
}
