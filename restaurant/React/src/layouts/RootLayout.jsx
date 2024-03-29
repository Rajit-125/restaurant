import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function RootLayout() {
    return (
        <div className=" flex flex-col h-[100vh]">
        <Navbar/>
        <Outlet/>
        </div>
     )
}
export default RootLayout