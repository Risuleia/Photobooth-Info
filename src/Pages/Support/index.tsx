import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { invoke } from "@tauri-apps/api/core";
import { pictureDir } from "@tauri-apps/api/path";


import './styles.css'
import { path } from "@tauri-apps/api";

export default function Support() {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);
  const [photoIndex, setPhotoIndex] = useState(1)

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(prev => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div id="countdown">
        {count > 0 && (
          <motion.span
            key={count}
            className="count"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {count}
          </motion.span>
        )}
        <span className="count-text">
          Choose a pose now, stay still after 1...
        </span>
    </div>
  );
}