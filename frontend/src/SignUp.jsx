const SignUp=()=>{
    return(
    <div className="flex items-center flex-col mt-10">
        
    <h1 className="text-2xl text-blue-500 font-bold">join BlogVerse</h1>
    <p className="text-center">create your account<br></br> and start your blogging journey</p>
    <form action="" className=" flex flex-col border-none border-black w-1/3 items-center py-7 px-5 gap-2">
        <div className="w-[80vw] flex flex-col gap-2 ">
            <p className="font-semibold">full name</p>
            <input  type="text" placeholder="enter your name" className="border-2 mb-3 ml-2 py-4 px-3 rounded-2xl focus:outline-none focus:border-blue-600"></input>

        </div>
        <div className="w-[80vw] flex flex-col gap-2 ">
            <p className="font-semibold">email</p>
            <input  type="email" placeholder="type your eamil" className="border-2 mb-3 ml-2 py-4 px-3 rounded-2xl focus:outline-none focus:border-blue-600"></input>

        </div>
        <div className="w-[80vw] flex flex-col gap-2 ">
            <p className="font-semibold">password</p>
            <input  type="text" placeholder="enter your password" className="border-2 mb-3 ml-2 py-4 px-3 rounded-2xl focus:outline-none focus:border-blue-600"></input>

        </div>
        <div className="w-[80vw] flex flex-col gap-2 ">
            <p className="font-semibold">confirm password</p>
            <input  type="text" placeholder="confirm your password" className="border-2 mb-3 ml-2 py-4 px-3 rounded-2xl focus:outline-none focus:border-blue-600"></input>
        
        </div>
        <div className="flex gap-2 w-[80vw] border-1 border-gray-950 px-3 py-1  ">
            <input type="checkbox" name="" id="" className="h-5 w-5"></input>
            <p className="w-">i agree to terms and conditions</p>
           </div>
         <button className="w-[80vw] mt-3 bg-green-700 py-4 text-white rounded-2xl font-semibold">create account</button>
         <div className="flex w-[90%] gap-10 ">
         <p className=" ">already have an account</p>
         <p>sign in here</p>
         </div>
    </form>
    </div>
    )
}
export default SignUp