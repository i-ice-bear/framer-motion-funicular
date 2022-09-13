import React from "react";
import Link from "next/link";
const Order = () => {
  const [pizza, setPizza] = React.useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>
        We will deliever your pizza in just few minutes <br /> have a good day
      </p>
      <Link href="/">
        <button>Want to order another pizza</button>
      </Link>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
