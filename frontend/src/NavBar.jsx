
const NavBar = () => {
    return (
        <div className="flex justify-around items-center h-5 border py-5 font-bold">
            <h1>BlogVerse</h1>
            <button className="text-gray-700 hover:bg-green-500 px-5 py-2 rounded-2xl">home</button>
       
        <div className=" flex gap-5">
        <button className="font-semibold text-gray-800">sign in</button>
         <button className="bg-blue-500 text-white py-1 rounded-xl cursor-pointer px-4">sign up</button>
        </div>
         </div>
    )
}
export default NavBar