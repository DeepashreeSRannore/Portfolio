import { motion } from 'framer-motion'
import { FaLaptop, FaGlasses } from 'react-icons/fa'
import './WelcomePage.css'

const WelcomePage = ({ onStart }) => {
  return (
    <motion.div 
      className="welcome-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      <motion.div 
        className="welcome-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="welcome-title">
          Hi, welcome to my journey.
        </h1>
        <h2 className="welcome-name">
          I'm <span className="highlight">Deepashree Srinivasa Rao Rannore</span>
        </h2>
        
        <motion.div 
          className="character-container"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
          <div className="character">
            <div className="head">
              <div className="hair"></div>
              <div className="face">
                <div className="glasses">
                  <FaGlasses className="glasses-icon" />
                </div>
                <div className="eyes">
                  <div className="eye left"></div>
                  <div className="eye right"></div>
                </div>
                <div className="mouth"></div>
              </div>
            </div>
            <div className="body">
              <div className="laptop">
                <FaLaptop className="laptop-icon" />
                <div className="screen-glow"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.button
          className="start-button"
          onClick={onStart}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px var(--nebula-purple)" }}
          whileTap={{ scale: 0.95 }}
        >
          Click Here to Start
          <span className="button-arrow">→</span>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default WelcomePage
