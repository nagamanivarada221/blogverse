import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        <div className="flex justify-around items-center h-5 border py-5 w-full font-bold">
            <h1>BlogVerse</h1>
            <Link to="/home" className="text-gray-700 hover:bg-green-500 px-5 py-2 rounded-2xl">home</Link>
       
        <div className=" flex gap-5">
        <Link to="/signin" className="font-semibold text-gray-800">sign in</Link>
         <Link to="/signup" className="bg-blue-500 text-white py-1 rounded-xl cursor-pointer px-4">sign up</Link>
        </div>
         </div>
    )
}
export default NavBar