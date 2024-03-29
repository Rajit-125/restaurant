import { useContext } from "react";
import CartContext from "../context/CartContext";
import Juice from "./Juice";

const chats = [
  {
    id: 1, name: "panipuri", price: 40
  },
  {
    id: 2, name: "shevpuri", price: 45
  },
  {
    id: 3, name: "bhelpuri", price: 40
  },
  {
    id: 4, name: "dahipuri", price: 50
  },
  {
    id: 5, name: "masalapuri", price: 45
  },
  {
    id: 6, name: "samosa", price: 30
  },
];

function Chats() {
  const cart = useContext(CartContext);
  const addHandler = (id, name, price) => {
    cart.setCartData((prev) => {
      const itemIndex = prev.findIndex(chat => chat.id === id && chat.name===name)
      if (itemIndex !== -1) {
        const updatedCart = prev.map(chat =>
          chat.id === id &&chat.name===name? { ...chat, count: chat.count + 1 } : chat
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
      <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/chats.jpg')]">
        <h1 className=" mx-80 flex items-center text-8xl text-cyan-50">YUMMY CHATS😉</h1>
        {
          chats.map(chat=>
          <ChatsItem id={chat.id} name={chat.name} price={chat.price} button="ADD" onClick={addHandler}></ChatsItem>
          )
        }
      </div>
    </>
  )
}

function ChatsItem({ id, name, price, button, onClick }) {
  return (
    <>
      <p className=" mx-72 my-10 flex items-center text-3xl text-cyan-50 font-bold">{id}.{name}---------${price}</p>
      <button className=" mx-72 flex items-center text-3xl text-cyan-50 font-bold bg-blue-500 w-20 hover:text-red-500 py-2 px-2 rounded-xl" onClick={() => onClick(id, name, price)}>{button}</button>
    </>
  )
}

export default Chats