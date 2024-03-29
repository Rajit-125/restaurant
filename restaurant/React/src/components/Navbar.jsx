import { Link } from 'react-router-dom';
function Navbar(){
    return (
      <>
       <div className=" w-full text-3xl flex justify-around py-4 gap-2  bg-blue-200 ">
         <h1>Welcome❤️❤️</h1>
          <div className='links mx-4'>
           <Link to="/" className=" mx-2 hover:text-blue-800 hover:bg-blue-300 px-2 ">Home</Link>
           <Link to="/addcart" className="mx-2 hover:text-blue-800 hover:bg-blue-300 px-2">AddCart</Link>
          <Link to="/profile" className=" mx-2 hover:text-blue-800 hover:bg-blue-300 px-2">Profile</Link>
          </div>
       </div>
      </>
    )
}
export default Navbar