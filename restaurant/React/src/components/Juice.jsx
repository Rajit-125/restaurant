import { useContext } from "react"
import CartContext from "../context/CartContext"

const juices = [
  {
    id: 1, name: "orange", price: 40
  },
  {
    id: 2, name: "watermelon", price: 40
  },
  {
    id: 3, name: "apple", price: 40
  },
  {
    id: 4, name: "grapes", price: 40
  },
];

function Juice() {
  const cart = useContext(CartContext);
  const addHandler = (id, name, price) => {
    cart.setCartData((prev) => {
      const itemIndex = prev.findIndex(juice => juice.id === id && juice.name === name)
      if (itemIndex !== -1) {
        const updatedCart = prev.map(juice =>
          juice.id === id && juice.name===name? { ...juice, count: juice.count + 1 } : juice
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
      <div className=" flex flex-col flex-1 bg-[url('./assets/JUICE.jpg')] bg-cover" >
        <h1 className=" mx-72 flex items-center text-9xl text-cyan-50 font-bold">COOL JUICE😍</h1>
        {
          juices.map(juice =>
            <JuiceItem id={juice.id} name={juice.name} price={juice.price} button="ADD" onClick={addHandler}></JuiceItem>
          )
        }
      </div>
    </>
  )
}
function JuiceItem({ id, name, price, button, onClick }) {
  return (
    <>
      <p className=" mx-64 my-10 flex items-center text-3xl text-cyan-50 font-bold">{id}.{name}------------${price}</p>
      <button className=" mx-64 flex items-center text-3xl text-cyan-50 font-bold bg-blue-500 w-20 hover:text-red-500 py-2 px-2 rounded-xl" onClick={() => onClick(id,name, price)}>{button}</button>
    </>
  )
}

export default Juice