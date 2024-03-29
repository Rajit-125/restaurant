import { useContext } from "react"
import CartContext from "../context/CartContext"

const pizzas=[
    {
        id:1,name:"margherita",size:"regular",price:245
    },
    {
        id:2,name:"peppy panner",size:"medium",price:459
    },
    {
        id:3,name:"veggy paradise",size:"medium",price:469
    },
    {
        id:4,name:"veg extravagnza",size:"medium",price:549
    },
];

function Pizza(){
    const cart= useContext(CartContext);
    const addHandler = (id, name, price) => {
        cart.setCartData((prev) => {
          const itemIndex = prev.findIndex(pizza => pizza.id === id && pizza.name === name)
          if (itemIndex !== -1) {
            const updatedCart = prev.map(pizza =>
              pizza.id === id && pizza.name === name ? { ...pizza, count: pizza.count + 1 } : pizza
            )
            return updatedCart
          }
          else {
            return [...prev, { id, name, price, count: 1 }]
          }
        });
      }
    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/pizza.jpg')]">
            <h1 className=" mx-96 flex items-center text-9xl text-cyan-50">PIZZA😜😜</h1>
           {
            pizzas.map(pizza=>
                <PizzaItem id={pizza.id} name={pizza.name} size={pizza.size} price={pizza.price} button="ADD" onClick={addHandler}></PizzaItem>
                )
           }
        </div>
        </>
    )
}

function PizzaItem({id,name,size,price,button,onClick}){
    return(
        <>
        <p className=" mx-72 my-10 flex items-center text-3xl text-white font-bold">{id}.{name},{size}-------${price}</p>
        <button className=" mx-72 flex items-center text-3xl text-cyan-50 font-bold bg-blue-500 w-20 hover:text-red-500 py-2 px-2 rounded-xl" onClick={()=>onClick(id,name,price)}>{button}</button>  
        </>
    )
}
export default Pizza