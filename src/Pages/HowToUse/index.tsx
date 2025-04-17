import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { invoke } from '@tauri-apps/api/core'
import { pictureDir } from '@tauri-apps/api/path'

import reset from '../../Utils/reset'
import tutorial from '../../assets/Videos/tutorial.mp4'

import './styles.css'
import { path } from '@tauri-apps/api'
import Footer from '../../Components/Footer'

export default function HowToUse() {
  const navigate = useNavigate()

  return (
    <motion.div
      id='how-to-use'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='how-container'>
        <div className="section-heading">How to Use?</div>
        <div className="tutorial-video">
          <video src={tutorial} autoPlay loop></video>
        </div>
      </div>
      <Footer backCallback={() => navigate(-1)} />
    </motion.div>
  )
}