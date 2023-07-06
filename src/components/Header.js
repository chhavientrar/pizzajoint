import React from 'react';
import { motion } from 'framer-motion';
const Header = () => {
  return (
    <header>
      <motion.div className="logo"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      >
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjcHNqb0XmMvkADD9SICtLD81PrXDFmbepQ&usqp=CAU' alt='img'
        height='50px' width='50px'
        />
        {/* <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg> */}
      </motion.div>
      <motion.div
      animate={{y:-10,x:10}}
       className="title">
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;