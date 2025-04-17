import { useEffect } from 'react'
import AnimatedRoutes from './AnimatedRoutes'

import './App.css'
import Header from './Components/Header'

function App() {
  useEffect(() => {
    const controller = new AbortController()
    window.addEventListener('gesturestart', (e) => e.preventDefault(), { signal: controller.signal });
    window.addEventListener('gesturechange', (e) => e.preventDefault(), { signal: controller.signal });
    window.addEventListener('gestureend', (e) => e.preventDefault(), { signal: controller.signal });

    return () => controller.abort()
  }, [])

  return (
    <>
      <Header />
      <div id="main">
        <AnimatedRoutes />
      </div>
    </>
  )
}

export default App
