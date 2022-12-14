import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const Base = () => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const [pizza, setPizza] = React.useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link href="./Topping">
            <motion.button initial={{ x: "-100vw" }} animate={{ x: 0 }}>
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
