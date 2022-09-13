import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            fill="none"
            transition={{ delay: 1, repeat: Infinity, repeatDelay: 2 }}
            initial={{
              opacity: 0.2,
              rotateZ: 180,
            }}
            animate={{ opacity: 1, rotateZ: 0 }}
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            transition={{ delay: 0.5, repeat: Infinity, repeatDelay:2 }}
            initial={{ opacity: 0.2, rotateZ: 180 }}
            animate={{ opacity: 1, rotateZ: 0 }}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </div>
      <motion.div
        className="title"
        transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
        initial={{ y: -250 }}
        animate={{ y: -10 }}
      >
        <h1>Framer pizza</h1>
      </motion.div>
    </header>
  );
};

export default Header;
