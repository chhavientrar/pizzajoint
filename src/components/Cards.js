import React from "react";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";

const Cards = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const imgarr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6P3OAlvmZB5tUuX1GBM12JJNDjN4_kju86GqtpmJBkkiPAQKU9IzdGF3lHd8uUf48OuM&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc3j3zyV2kHidalz0o_bIViXUtJnr-5MVRmINpv-7bYzMhcoMn9ZaZLL90wP11AUqJrs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGQPt1ZgCeYwAeWRvvD0O9hMkItz71HKuY91BCRtxH2cjwuB9gUxh4npetBFZ6ZjjDtM&usqp=CAU",
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % imgarr.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ rotate: 250, x: 10, y: -10 }}
      animate={{
        scale: [1, 1.2, 0.4, 1, 1],
        rotate: [250, 250, 270, 270, 250],
      
        

        // borderRadius: ["80%", "80%", "50%", "50%", "20%"]
      }}
      transition={{ duration: 1,type:'spring',stiffness:10 }}
      className="card"
    >
    <motion.img
    animate={{borderRadius: ["80%", "80%", "50%"]}}
        className="cardimg"
        src={imgarr[currentImgIndex]}
        alt="img"
        height="150px"
        width="150px"
      />
    </motion.div>
  );
};

export default Cards;
