import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Supabase from '../Supabase/Client';
function Otp() {
    let navigate=useNavigate()
    const [otp,setotp]=useState("")
    const {state} = useLocation();
    const {number} = state;
    async function handlesignin(e, number, otp) {
        e.preventDefault()
        try {
            let { data, error } = await Supabase.auth.verifyOtp({
                phone: "91" + number,
                token: otp,
                type: 'sms'
            })
            if(error) throw error
            navigate('/')
            alert('login successfullllllllll')
        }
        catch(error){
            alert('wrong otp')
        }
    }
    return (
        <>
            <div className=" w-full h-[100vh] flex flex-col flex-1 items-center justify-center bg-[url('./assets/OMG.jpg')] bg-cover">
                <form id='login-form' method='POST' onSubmit={(e) => handlesignin(e, number,otp)}>
                    <div className=" flex items-center text-4xl text-white"> <label htmlFor="otp">Plese enter an OTP</label> </div>
                    <div className=" my-5 flex items-center text-3xl"> <input className=" rounded-2xl w-32 " otp number="otp"  type=' text' value={otp} onChange={(e)=>setotp(e.target.value)}/> </div>
                    <div className=" mx-5 my-10 w-24 flex items-center text-3xl bg-violet-600 hover:text-red-400 px-1 rounded-xl"> <button type='submit'>LOGIN</button></div>
                </form>
            </div>
        </>
    )
}
export default Otp