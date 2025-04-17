import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.css'
import { documentDir } from '@tauri-apps/api/path'

export default function Cashback() {
  const navigate = useNavigate()
  const [email, onSetEmail] = useState("")
  const [documentPath, setDocumentPath] = useState("")
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const [layoutName, setLayoutName] = useState("default")

  const keyboardRef = useRef(null)

  useEffect(() => {
    async function fetchPath() {
      const path = await documentDir()
      setDocumentPath(path)
    }

    fetchPath()
  }, [])


  const validate = (): boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  }

  function handleKeyPress(btn: string) {
    switch (btn) {
      case "{lock}": {
        setLayoutName(prev => prev == "lock" ? "default" : "lock")
        break
      }
      case "{shift}": {
        setLayoutName(prev => prev == "shift" ? "default" : "shift")
        break
      }
      case "{bksp}": {
        onSetEmail(prev => prev.slice(0, -1))
        break
      }
      default: break
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        keyboardRef.current &&
        !(keyboardRef.current as HTMLElement).contains(event.target as Node) &&
        !(document.getElementById("email-input") as HTMLElement)?.contains(event.target as Node)
      ) {
        setKeyboardVisible(false)
      }
    }

    if (keyboardVisible) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [keyboardVisible])

  return (
    <motion.div
      id='mail'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <div className='mail-container'>
          <h1 className="heading">Enter <div>email</div> to collect <div>digital downloads</div></h1>
          <div className="input-container">
          </div>
        </div>
        <div className="disclaimer">
          Your photos will be sent to the provided email within 24 hours.
          <br />
          This email may also be used for marketing purposes, with an option to unsubscribe anytime.
        </div>
        {keyboardVisible && (
          <div id='keyboard' ref={keyboardRef}>
          </div>
        )}
    </motion.div>
  )
}
