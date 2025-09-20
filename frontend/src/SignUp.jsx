import NavBar from "./NavBar"
import { Link } from 'react-router-dom'
import React from "react"
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";
const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}
        if (!formData.fullName) {
            newErrors.fullName = "please enter your full name"
        }
        if (!formData.email) {
            newErrors.email = "please enter your email"
        }
        if (!formData.password) {
            newErrors.password = "please enter your correct pasword"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "please enter your correct pasword"
        }
        else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "your password did not match confirm password"
        }
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
        }
        else {
            setSuccess("your account has been created successfully")
            setFormData((formData)=>({
                ...formData,
               [event.target.name]:event.target.value
            }))
         setErrors((errors)=>({
            ...errors,
               [event.target.name]:""
            }))
        }

    }
        if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("please fill all the feilds")
        } else if (formData.password !== formData.confirmPassword) {
            setError("your password did not match")
        } else {
            setSuccess("your account is created successfully")
            setError("")
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        }
    }

    const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    const handleConfirmPassword = () => {
        setShowConfirmPassword((password) => !password)
    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")

        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        })
        )

    }
    return (
        <div className="flex items-center flex-col mt-10">
            <NavBar />
            <h1 className="text-2xl text-blue-500 font-bold">join BlogVerse</h1>
            <p className="text-center">create your account<br></br> and start your blogging journey</p>
            <div className="flex flex-col items-center w-1/2">
                <form onSubmit={handleSubmit} action="" className=" flex flex-col border-none border-black w-1/3 items-center py-7 px-5 gap-2">
                    <div className="w-[80vw] flex flex-col gap-2 ">
                        <p className="font-semibold">full name</p>
                        <input type="text"

                            value={formData.fullName}
                            onChange={handleChange}
                            name="fullName"
                            placeholder="enter your name" className="border-2 mb-3 ml-2 py-4 px-3 rounded-2xl focus:outline-none focus:border-blue-600" />
                        {errors.fullName && <p>{errors.fullName}</p>}

                    </div>
                    <div className="w-[80vw] flex flex-col gap-2 ">
                        <p className="font-semibold">email</p>
                        <div className="relative">

                            <input type="email"

                                value={formData.email}
                                onChange={handleChange}
                                name="email"
                                placeholder="type your eamil" className="pl-12 border-2 mb-3 ml-2 py-4 px-3 w-full rounded-2xl focus:outline-none focus:border-blue-600" />
                            <Mail className="absolute  top-4 left-5  " />
                            {errors.email && <p>{errors.email}</p>}

                        </div>
                    </div>
                    <div className="w-[80vw] flex flex-col gap-2 ">
                        <p className="font-semibold"> password</p>
                        <div className="relative">
                            <input

                                value={formData.password}
                                name="password"
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"} placeholder="enter your password" className="pl-10 w-full border-2 mb-3 ml-2 py-4 px-3 rounded-2xl focus:outline-none focus:border-blue-600" />
                            <KeyRound className="absolute top-4 left-5" />
                            <p onClick={handlePassword}>{showPassword ? <Eye className=" absolute top-4 right-3" /> : <EyeOff className="absolute top-4 right-3" />}</p>
                            {errors.password && <p>{errors.password}</p>}

                        </div>
                    </div>
                    <div className="w-[80vw] flex flex-col gap-2 ">
                        <p className="font-semibold">confirm password</p>
                        <div className="relative">
                            <input

                                value={formData.confirmPassword}
                                name="confirmPassword"
                                onChange={handleChange}
                                type={showConfirmPassword ? "text" : "password"} placeholder="confirm your password" className="pl-15 border-2 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-blue-600" />
                            <KeyRound className="absolute top-4 left-5" />
                            <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className="absolute top-4 right-5  " /> : <EyeOff className="absolute top-4 right-5" />}</p>
                            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                        </div>
                    </div>
                    <div className="flex gap-2 w-[80vw] border-1 border-gray-950 px-3 py-1  ">
                        <input type="checkbox" name="" id="" className="h-5 w-5" />
                        <p className="w-">i agree to terms and conditions</p>
                    </div>
                 {/* {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-blue-500">{success}</p>}  */}
                    <button type="submit" className="flex w-[80vw] mt-3 bg-green-700 py-4 text-white rounded-2xl font-semibold  justify-center "><CircleUser className="" /><p>create account</p></button>
                    <div className="flex flex-row ml-3 w-[90%] gap-10 ">
                        <p className=" ">already have an account</p>
                        <Link to="/login">sign in here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp