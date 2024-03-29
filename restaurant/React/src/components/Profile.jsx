import { Link, useNavigate } from "react-router-dom"
import Supabase from "../Supabase/Client"

function Profile() {
   let navigate=useNavigate()
   async function handlesignout(){
     try{   
    let { error } = await Supabase.auth.signOut()
      if(error) throw error
      navigate('/login')
      alert('logged out successfully')
     }catch(error){
        alert('you have not paid total amount')
     }

    }
    return (
        <>
            <div>
                <div className=" mx-96 text-6xl flex items-center py-96 px-52 font-bold text-black bg-[url('./assets/QR-CODE.jpg')] bg-contain bg-no-repeat">
                    SCAN HERE
                </div>
                    <div className=" mx-96 flex items-center text-7xl bg-violet-600 hover:bg-red-500 w-60 h-32 px-1 rounded-3xl">
                        <button onClick={handlesignout}>Logout</button>
                    </div>
            </div>
        </>
    )
}
export default Profile