import { motion } from 'framer-motion'

import './styles.css'
import { useEffect, useState } from 'react'
import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
import Nav from '../../Components/Nav'

import cover from '../../assets/Images/cover-bg.jpg'

export default function Home() {
    const [qPressCount, setQPressCount] = useState(0)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() == 'q') {
                setQPressCount(prev => prev + 1)
            } else {
                setQPressCount(0)
            }
        }

        const controller = new AbortController()
        document.addEventListener('keydown', handleKeyDown, { signal: controller.signal })

        return () => controller.abort()
    }, [])
    
    useEffect(() => {
        if (qPressCount >= 4) {
            WebviewWindow.getCurrent().close()
        }
    }, [qPressCount])

  return (
    <motion.div
      id='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <div className='home-container'>
            <div className="home-poster">
                <img src={cover} alt="" />
            </div>
            <Nav />
        </div>
    </motion.div>
  )
}
