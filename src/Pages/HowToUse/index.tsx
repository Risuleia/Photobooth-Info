import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../../Components/Header';

import { useNavigate } from 'react-router-dom';

import './styles.css';

export default function HowToUse() {
  const navigate = useNavigate()
  const [status, setStatus] = useState<number>(-1)
  const [code, setCode] = useState<Array<string>>(["", "", "", ""])

  const correct = "5412";

  return (
    <motion.div
      id='passcode'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header backCallback={() => navigate(-1)}/>
      <div className="passcode-container">
        <div className="numpad-container">
        </div>
        <div className="input-container">
          <div
            className="input-box"
            data-status={status == 0 ? 'incorrect' : status == 1 ? 'correct' : ''}
          >
            {code.map((digit, index) => (
              <div
                key={index}
                className="input"
                data-filled={digit !== ""}
              >
                {digit === "" ? "﹡": "∗"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
