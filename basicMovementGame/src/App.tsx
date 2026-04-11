import { useEffect, useRef } from 'react'
import './App.css'

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pressedKeysRef = useRef(new Set<string>())

  // Storing player position within a object
  const playerRef = useRef({
    x: 80,
    y: 120,
    width: 28,
    height: 44,
  })

  // movement speed for player
  const movementSpeed = 2

  //updates the player reference with user inputs
  const updatePlayerRef = () => {
    const keys = pressedKeysRef.current

    if (keys.has('KeyW')) {
      playerRef.current.y -= movementSpeed
    }
    if (keys.has('KeyS')) {
      playerRef.current.y += movementSpeed
    }
    if (keys.has('KeyA')) {
      playerRef.current.x -= movementSpeed
    }
    if (keys.has('KeyD')) {
      playerRef.current.x += movementSpeed
    }
  }

  // debugging to see what keys are pressed and removes the keystroke so memory leak does not happen
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      pressedKeysRef.current.add(event.code)
      console.log('down:', event.code, Array.from(pressedKeysRef.current))
    }
    const onKeyUp = (event: KeyboardEvent) => {
      pressedKeysRef.current.delete(event.code)
      console.log('up:', event.code, Array.from(pressedKeysRef.current))
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  //renders the actual canvas and draws with a loop
  useEffect(() => {
    // Find the real canvas element that React placed on the page.
    const canvas = canvasRef.current
    if (!canvas) return

    // Ask the canvas for its 2D drawing tools.
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Give the canvas a fixed drawing size.
    canvas.width = 480
    canvas.height = 270

    const draw = () => {
      // clear the previous frame
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // sky
      const sky = ctx.createLinearGradient(0, 0, 0, canvas.height)
      sky.addColorStop(0, '#1a4fc1')
      sky.addColorStop(1, '#3588f5')
      ctx.fillStyle = sky
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // ground
      ctx.fillStyle = '#2e5d35'
      ctx.fillRect(0, 190, canvas.width, 80)

      // player body
      ctx.fillStyle = '#4d63d8'
      ctx.fillRect(
        playerRef.current.x,
        playerRef.current.y,
        playerRef.current.width,
        playerRef.current.height
      )

      // player head
      ctx.fillStyle = '#f0d1ad'
      ctx.fillRect(
        playerRef.current.x + 4,
        playerRef.current.y - 18,
        20,
        20
      )
    }

    let frameID = 0

    const loop = () => {
      updatePlayerRef()
      draw()
      frameID = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      cancelAnimationFrame(frameID)
    }
  }, [])

  return (
    <main className="app">
      {/* React draws the text part of the screen */}
      <h1>Shins Movement Game</h1>
      <p>Work in progess</p>

      {/* React also places the canvas on the page */}
      <section className="canvas-card">
        <canvas ref={canvasRef} aria-label="Game canvas" />
      </section>
    </main>
  )


}
