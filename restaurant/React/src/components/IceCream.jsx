import { useContext } from "react"
import CartContext from "../context/CartContext"
const icecreams = [
  {
    id: 1, name: "vanila", price: 40
  },
  {
    id: 2, name: "butterscotch", price: 40
  },
  {
    id: 3, name: "chocolate", price: 40
  },
  {
    id: 4, name: "pista", price: 40
  },
];
function IceCream() {
  const cart = useContext(CartContext);
  const addHandler = (id, name, price) => {
    cart.setCartData((prev) => {
      const itemIndex=prev.findIndex(item=> item.id===id && item.name===name)
      if (itemIndex!==-1) {
       const updatedCart = prev.map(item =>
        item.id===id && item.name===name ? {...item,count:item.count +1} : item 
       )
       return updatedCart
      }
      else {
        return [...prev, { id, name, price, count:1 }]
      }
    });
  }

  return (
    <>
      <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/icecream.jpg')]">
        <h1 className=" mx-80 flex items-center text-9xl text-cyan-50">ICE CREAMS✌️</h1>
        {
          icecreams.map(icecream =>
            <IceCreamItem id={icecream.id} name={icecream.name} price={icecream.price} button="ADD" onClick={addHandler}></IceCreamItem>
          )
        }

      </div>
    </>
  )
}

function IceCreamItem({ id, name, price, button, onClick }) {
  return (
    <>
      <p1 className=" mx-64 my-10 flex items-center text-3xl text-cyan-50 font-bold">{id}.{name}-----------${price}</p1>
      <button className=" mx-72 flex items-center text-3xl text-cyan-50 font-bold bg-blue-500 w-20 hover:text-red-500 py-2 px-2 rounded-xl" onClick={() => onClick(id, name, price)}>{button}</button>
    </>
  )
}

export default IceCream