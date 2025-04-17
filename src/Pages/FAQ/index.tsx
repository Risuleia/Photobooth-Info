import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { invoke } from '@tauri-apps/api/core'
import { pictureDir } from '@tauri-apps/api/path'

import reset from '../../Utils/reset'

import './styles.css'
import { path } from '@tauri-apps/api'
import Footer from '../../Components/Footer'

export default function FAQ() {
  const navigate = useNavigate()

  const faqs = [
    {
    	q: "How many photos will be taken?",
    	a: "We’ll take 4 pictures, one after the other, with a 3-second countdown before each shot."
    },
    {
    	q: "Can I choose how my photos look?",
    	a: "Yes! You can choose a filter—either Color or Black & White—before the session starts."
    },
    {
    	q: "What is the size of the print?",
    	a: "Each session gives you two 2x6 strips—perfect for sharing!"
    },
    {
    	q: "Can I see a preview before the photos are clicked?",
    	a: "Yes! You’ll see a live camera preview and countdown timer before each click so you can pose perfectly."
    },
    {
    	q: "Can I re-take the photos?",
    	a: "Currently, re-takes aren't available once the session starts, so strike your best poses the first time!"
    },
    {
    	q: "Do I need to pay before or after the photos?",
    	a: "Payment is made before the session begins via UPI using a QR code shown on the screen."
    },
    {
    	q: "How long does it take to print the photos?",
    	a: "Printing takes around 15–30 seconds after your session ends."
    },
    {
    	q: "Why is one of my photos blurry?",
    	a: "This typically happens if you move after the countdown reaches “1,” as the camera locks focus at that moment to capture a crisp image."
    },
    {
    	q: "Why are all my photos blurry?",
    	a: "If all the 4 pictures are blurry, send a mail to support@memorabooth.com with a picture of the blurry strips, and get full refund within 48 hours."
    },
    {
    	q: "How many people can fit in the frame?",
    	a: "The booth comfortably fits 3–5 people. You can squeeze in more, but make sure everyone is visible in the preview!"
    },
    {
    	q: "Can I choose a different filter for each photo?",
    	a: "Currently, one filter is applied to all 4 photos in a session. Pick your favorite vibe at the start!"
    },
    {
    	q: "Will my photos be stored or shared?",
    	a: "Nope! Your photos are not stored or shared unless you choose to do so. We value your privacy."
    },
    {
    	q: "What payment methods are accepted?",
    	a: "We currently accept UPI payments only. Scan the QR code shown on-screen to complete your payment."
    },
    {
    	q: "What if my payment didn’t go through?",
    	a: "If your UPI payment failed but money was deducted, don’t worry—UPI refunds are usually processed automatically. If not, send us a screenshot at support@memorabooth.com and we’ll assist you."
    },
    {
    	q: "Can I print extra copies?",
    	a: "At the moment, one print per session is provided. For more prints, start a new session."
    },
    {
    	q: "What should I do if nothing happens after payment?",
    	a: "If your session doesn't start after payment, wait a few seconds. If it still doesn’t respond, email us at support@memorabooth.com with your payment details."
    }
  ]

  return (
    <motion.div
      id='faq'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='faq-container'>
        <div className="section-heading">FAQ</div>
        <div className="faq-qa">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question faq-text">
                {faq.q}
              </div>
              <div className="faq-answer faq-text">
                <div className="faq-label">A:</div>{faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer backCallback={() => navigate(-1)} />
    </motion.div>
  )
}
