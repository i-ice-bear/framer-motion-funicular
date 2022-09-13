import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay:1, duration:2 }}
    >
      <motion.h2>Welcome to Framer Pizza</motion.h2>
      <Link href="./components/Base">
        <motion.button initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
