import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { invoke } from '@tauri-apps/api/core'
import { pictureDir } from '@tauri-apps/api/path'

import reset from '../../Utils/reset'

import './styles.css'
import { path } from '@tauri-apps/api'
import Footer from '../../Components/Footer'

export default function Cashback() {
  const navigate = useNavigate()

  return (
    <motion.div
      id='cashback'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='cashback-container'>
        <div className="section-heading">Cashback</div>
        <div className="cashback-text">
          <div className="cashback-title">
            Want ₹50 back? It’s easy!
          </div>
          <div className="cashback-content">
            Tag us in your Instagram story or post featuring your photobooth pictures.
            <br />
            Send us a screenshot of the post/story to support@memorabooth.com or DM us.
            <br />
            Once verified, you’ll receive a ₹50 cashback within 48 hours via UPI.
          </div>
          <div className="cashback-disclaimer">
            Limited to one cashback per session. Offer valid only on the day of usage.
          </div>
        </div>
      </div>
      <Footer backCallback={() => navigate(-1)} />
    </motion.div>
  )
}