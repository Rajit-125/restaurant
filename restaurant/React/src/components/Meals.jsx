import { useContext } from "react";
import CartContext from "../context/CartContext";

const meals = [
  {
    id: 1, name: "southindian", price: 80
  },
  {
    id: 2, name: "northindian", price: 100
  },
];

function Meals() {
  const cart = useContext(CartContext);
  const addHandler = (id, name, price) => {
    cart.setCartData((prev) => {
      const itemIndex = prev.findIndex(meal => meal.id === id && meal.name === name)
      if (itemIndex !== -1) {
        const updatedCart = prev.map(meal =>
          meal.id === id && meal.name === name ? { ...meal, count: meal.count + 1 } : meal
        )
        return updatedCart
      }
      else {
        return [...prev, { id, name, price, count: 1 }]
      }
    });
  }

  return (
    <>
      <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/meals.jpg')]">
        <h1 className=" mx-96 flex items-center text-9xl text-black">MEALS😊😊</h1>
        {
          meals.map(meal =>
            <MealsItem id={meal.id} name={meal.name} price={meal.price} button="ADD" onClick={addHandler}></MealsItem>
          )
        }
      </div>
    </>
  )
}

function MealsItem({ id, name, price, button, onClick }) {
  return (
    <>
      <p className=" mx-72 my-10 flex items-center text-3xl text-black font-bold">{id}.{name}---------${price}</p>
      <button className=" mx-72 flex items-center text-3xl text-black font-bold bg-blue-500 w-20 hover:text-red-500 py-2 px-2 rounded-xl" onClick={() => onClick(id, name, price)}>{button}</button>
    </>
  )
}

export default Meals