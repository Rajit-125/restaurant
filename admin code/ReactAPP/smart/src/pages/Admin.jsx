
import { useEffect, useState } from "react"
import Supabase from "../Supabase/Client"

function Admin(){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

   async function fetchorderitem(){
        const {data:d ,error:e}= await Supabase.from("orderdetail").select("*")
        setData(d)
        setError(e)
        console.log(d,e)
    }
    useEffect(()=>{
        fetchorderitem()
    },[])
   useEffect(()=>{
    console.log(data)
   },[data])
    return (
        <>
        <div>
            <h1 className=" mx-72 flex items-center text-6xl text-black">orderdetails</h1>
            {
                data&&data.map(item=>
                    <div className=" mx-72 my-10 flex items-center font-bold text-3xl text-black">
                        <div id={item.id} >
                            <h1>
                                {item.itemname}--{item.no_of_items}
                            </h1>
                            <h2>
                                rs.{item.totalprice}
                            </h2>
                            <h3>
                                +{item.phone_number}
                            </h3>
                        </div>
                    </div>
                )
            }
        </div>
        </>
    )
}
export default Admin