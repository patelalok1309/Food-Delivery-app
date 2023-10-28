import React, { useState } from 'react'
import { LoginBg, Logo } from '../assets'
import { LoginInput } from "../components"
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons"
import { motion } from 'framer-motion'
import { buttonClick, fadeInOut } from '../animations'
import { FaGoogle } from 'react-icons/fa'
function Login() {

    const [userEmail, setUserEmail] = useState("")
    const [isSignUp, setIsSignUp] = useState(false)
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirm_password] = useState("")
    return (
        <motion.div className='w-screen h-screen relative overflow-hidden flex'>

            {/* background image */}
            <img src={LoginBg}
                alt="backgroudimg"
                className='w-full h-full object-cover absolute' />

            {/* content box */}
            <div className='flex flex-col items-center bg-lightOverlay w-[80%] md:w-508  h-full z-10 backdrop-blur-md p-4 px-4 py-12 '>

                {/* Top logo section  */}
                <div className="flex justify-start items-center gap-4 w-full">
                    <img src={Logo} alt="logo" className='w-8' />
                    <p className="text-headingColor font-semibold text-2xl "></p>
                </div>

                {/* welcome text  */}
                <p className="text-3xl font-semibold text-headingColor"> Welcome Back </p>
                <p className="text-xl text-textColor -m-1">{isSignUp ? "Sign Up" : "Sign In"} with following </p>

                <div
                    {...fadeInOut}
                    className="w-full flex flex-col items-center justify-center
                 gap-6 px-4 md:px-12 py-4">
                    <LoginInput
                        placeHolder={"Email here "}
                        icon={<FaEnvelope className='text-xl text-textColor ' />}
                        inputState={userEmail}
                        inputStateFunc={setUserEmail}
                        type="email"
                        isSignUp={isSignUp}
                    />
                    <LoginInput
                        placeHolder={"Password here "}
                        icon={<FaLock className='text-xl text-textColor ' />}
                        inputState={password}
                        inputStateFunc={setPassword}
                        type="password"
                        isSignUp={isSignUp}
                    />

                    {isSignUp && (
                        <LoginInput
                            placeHolder={"Confirm Password here "}
                            icon={<FaLock className='text-xl text-textColor ' />}
                            inputState={confirm_password}
                            inputStateFunc={setConfirm_password}
                            type="password"
                            isSignUp={isSignUp}
                        />
                    )}

                    {!isSignUp ?
                        <p>Doesn't have an account : <motion.button {...buttonClick} className='text-red-400 underline cursor-pointer bg-transparent' onClick={() => setIsSignUp(true)}> Create one </motion.button> </p>
                        : <p>Already have an account : <motion.button {...buttonClick} className='text-red-400 underline cursor-pointer bg-transparent' onClick={() => setIsSignUp(false)}> Sign Up </motion.button> </p>
                    }

                    {/* button section */}
                    {isSignUp ?
                        <motion.button {...buttonClick} className='w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 translate-all duration-100'>
                            Sign Up
                        </motion.button> :
                        <motion.button {...buttonClick} className='w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 translate-all duration-100'>
                            Sign In
                        </motion.button>
                    }
                </div>

                <div className="flex items-center justify-between gap-16">
                    <div className="w-32 h-[1px] rounded-md bg-white"></div>
                    <p className='text-white'> or </p>
                    <div className="w-32 h-[1px] rounded-md bg-white"></div>
                </div>

                <motion.div
                    {...buttonClick}
                    className='flex items-center justify-center px-20 py-2 bg-lightOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4'>
                    <FcGoogle className='text-3xl' />
                    <p className='capitalize text-base text-textColor'>Signin with Google</p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Login