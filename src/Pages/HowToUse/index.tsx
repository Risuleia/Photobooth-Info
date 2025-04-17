import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import tutorial from '../../assets/Videos/tutorial.mp4'

import './styles.css'
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