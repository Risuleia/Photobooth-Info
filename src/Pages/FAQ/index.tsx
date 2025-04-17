import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { invoke } from '@tauri-apps/api/core'
import { pictureDir } from '@tauri-apps/api/path'

import reset from '../../Utils/reset'

import './styles.css'
import { path } from '@tauri-apps/api'

export default function FAQ() {
  const navigate = useNavigate()

  const greetings = [
    "Photos so good, they might break the internet!",
    "Your photos are hotter than the flash we just used!",
    "Warning: These pictures may cause excessive smiling!",
    "We hope you love these pics as much as the camera loved you!",
    "Caution: These photos may cause extreme nostalgia in the future.",
    "Looking this good should be illegal!"
  ]

  const [progressText, setProgressText] = useState("0 of 0")
  const [showLoader, setShowLoader] = useState(true)

  return (
    <motion.div
      id='greeting'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='greeting-container'>
        <div className="greeting-title">
          {greetings[Math.floor(Math.random() * greetings.length)]}
        </div>
        <div className="greeting-subtitle">
          Collect your prints here
        </div>
      </div>
    </motion.div>
  )
}
