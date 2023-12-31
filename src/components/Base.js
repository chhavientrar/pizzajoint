import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
    initial={{x:'100vw'}}
    animate={{x:0}}
    transition={{type:'spring',delay:0.5}}
   
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
         initial={{x: '-100vw'}}
         animate={{x:0}}
        transition={{type:'spring',stiffness:120}}
         className="next">
          <Link to="/toppings">
            <motion.button whileHover={{scale:1.3}}>
              <img src='./Male Framer.gif' alt='next' height='30px' width='30px'/>
              Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;