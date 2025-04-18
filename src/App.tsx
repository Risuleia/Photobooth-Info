import { useEffect } from 'react'
import AnimatedRoutes from './AnimatedRoutes'

import './App.css'
import Header from './Components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  const navigate = useNavigate()
  const location = useLocation()

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
      {location.pathname == '/' ? <Nav /> : <Footer backCallback={() => navigate(-1)} />}
    </>
  )
}

export default App
