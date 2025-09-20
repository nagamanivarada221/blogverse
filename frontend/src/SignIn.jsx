 import NavBar from "./NavBar"
 import {Link} from 'react-router-dom'
 import { KeyRound } from 'lucide-react';
 import { Mail } from 'lucide-react';
 import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
 const SignIn=()=>{
  
    return(
     
        <div className=" h-screen bg-indigo-100">
           <NavBar/>
        <div className="flex flex-col  items-center bg">
            
            <form className="flex flex-col items-center bg-white mt-35 h-max  border border-gray rounded-4xl w-md">
              
              <p className="font-bold">Sign In</p> 
              <p className="mb-3">access your account</p>
              <div className="flex flex-col gap-4">
                <div className="">
              <p className="flex flex-col text-gray-900 ">Email address</p> 
              <div className="relative ">
                
              <input type="email" placeholder="  type your email"  className="border-gray-700 w-full ml-9 focus:ring-2 relative"/>
              <Mail className="absolute  top-1 left-2" />
              </div>
              </div>
              <p className="flex flex-col text-gray-900">password</p> 
              <div className="relative">
                <input type="password" placeholder="enter your password" className="ml-8"/>
                <KeyRound className="absolute top-1 left"/>
                <Eye className="absolute top-1 right-2 "/>
              </div>
             <div className="flex flex-row">
              <input type="checkbox"></input>
              <p className="text-gray-900">remember me</p>
              <p className="text-blue-900 ml-15 cursor-pointer">forgot password?</p>
              
              </div>
              <p className="flex flex-col items-center mt-5 bg-blue-600 rounded-2xl cursor-pointer text-white">Sign In</p>
              <div className="flex flex-row mb-10" >
              <p>don't have an account?</p>
              <Link to="/login" className="text-blue-500 font-semibold">create here</Link>
              </div>
           </div>
            </form>

        </div>
        </div>
    )
}
export default SignIn