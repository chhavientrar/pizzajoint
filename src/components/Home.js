import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <motion.div className="home container"
    // animate={{marginTop:30}}
    initial={{opacity:0}}
    animate={{opacity:1}}

    >
      <motion.h2 animate={{fontSize:35, color:'yellow',y:-10}}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
        animate={{scale:1.6}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;