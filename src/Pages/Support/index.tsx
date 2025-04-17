import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import './styles.css'
import Footer from '../../Components/Footer'

import qr from '../../assets/Images/feedback-qr.svg'

export default function Support() {
  const navigate = useNavigate()

  const fields = [
    {
    	label: "Contact number",
    	value: "7550154640"
    },
    {
    	label: "Support mail",
    	value: "support@memorabooth.com"
    },
    {
    	label: "Supporting hours",
    	value: "10 am to 6pm"
    }
  ]

  return (
    <motion.div
      id='support'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='support-container'>
        <div className="section-heading">Support</div>
        <div className="support-fields">
          {fields.map((field, index) => (
            <div className="field-item" key={index}>
              <div className="field-label">{field.label}:</div>
              <div className="field-value">{field.value}</div>
            </div>
          ))}
          <div className="field-qr">
            <div className="field-label">Feedback form:</div>
            <div className="qr">
              <img src={qr} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer backCallback={() => navigate(-1)} />
    </motion.div>
  )
}