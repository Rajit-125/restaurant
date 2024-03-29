import { useContext } from "react"
import CartContext from "../context/CartContext"

const dosas = [
  {
    id: 1, name: "masaladosa", price: 60
  },
  {
    id: 2, name: "butter masaladosa", price: 60
  },
  {
    id: 3, name: "plaindosa", price: 60
  },
  {
    id: 4, name: "oniondosa", price: 60
  },
];

function Dosa() {
  const cart = useContext(CartContext);
  const addHandler = (id, name, price) => {
    cart.setCartData((prev) => {
      const itemIndex = prev.findIndex(dosa => dosa.id === id && dosa.name === name)
      if (itemIndex !== -1) {
        const updatedCart = prev.map(dosa =>
          dosa.id === id && dosa.name === name ? { ...dosa, count: dosa.count + 1 } : dosa
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
      <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/dosa.jpg')]">
        <h1 className=" mx-96 flex items-center text-9xl text-cyan-50">DOSA🤤🤤</h1>
        {
          dosas.map(dosa =>
            <DosaItem id={dosa.id} name={dosa.name} price={dosa.price} button="ADD" onClick={addHandler}></DosaItem>
          )
        }
      </div>
    </>
  )
}

function DosaItem({ id, name, price, button, onClick }) {
  return (
    <>
      <p className=" mx-72 my-10 flex items-center text-3xl text-cyan-50 font-bold">{id}.{name}---------${price}</p>
      <button className=" mx-72 flex items-center text-3xl text-cyan-50 font-bold bg-blue-500 w-20 hover:text-red-500 py-2 px-2 rounded-xl" onClick={() => onClick(id, name, price)}>{button}</button>
    </>
  )
}
export default Dosa