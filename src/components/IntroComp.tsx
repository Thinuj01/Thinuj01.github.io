import '../styling/IntroComp.css';
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const IntroComp = () => {
  return (
    <motion.div 
      className="introContainer"
      initial={{ opacity: 0, y: 50 }}   // Start position
      animate={{ opacity: 1, y: 0 }}    // End position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    >
      <motion.h1 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi,
      </motion.h1>

      <motion.h3 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I'am Thinuja Hettiarachchi
      </motion.h3>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        A Passionate Full Stack Developer
      </motion.p>

      <motion.div 
        className="resumeBtn"
        whileHover={{ scale: 1.1 }} // hover effect
        whileTap={{ scale: 0.95 }}  // click effect
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <FaDownload style={{ marginRight: "8px" }} />
        Download Resume
      </motion.div>
    </motion.div>
  )
}

export default IntroComp;
