'use client'
// import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { EyeIcon, EyeOffIcon } from "lucide-react";
import { ProfileForm } from '@/components/auth/register-form'

const SignUp = () => {
    // const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='grid md:grid-cols-2'>
            <div className='h-screen bg-[url("/assets/images/loginbg.jpg")] bg-no-repeat bg-cover bg-center hidden md:block'>
            <div className='flex flex-col h-full justify-end items-start p-10'>
            <Image src='/assets/images/SVG/banu-white.svg' alt='logo' width={120} height={100} className='mb-6' />
            <h1 className='font-black md:text-4xl mb-3 text-2xl text-white'>Reliable and transparent finances.<br/> Enjoy complete peace of mind.</h1>
            </div>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center md:w-xl w-full px-6 mx-auto h-screen'>
            <Link href="/" className="text-2xl font-bold text-black mb-10">
                        <Image src='/assets/images/SVG/banu.svg' alt='logo' width={150} height={100} className='' />
                    </Link>
                <ProfileForm/>
                {/* <div className='w-full flex flex-col justify-center items-center'>

                    <Link href="/" className="text-2xl font-bold text-black mb-10">
                        <Image src='/assets/images/SVG/banu.svg' alt='logo' width={150} height={100} className='' />
                    </Link>

                    <div className=' w-full'>
                    <Button className='hover:cursor-pointer bg-white text-black font-bold py-6 hover:bg-white border-gray-300 border-1  w-full' ><span><Image src='/assets/images/google.svg' alt='logo' width={20} height={20} className='' /> </span>Login with Google</Button>
                        </div>

                    <div className="flex items-center gap-4 mt-6 w-full">
                        <div className="flex-1 border-t border-amber-400 w-full"></div>
                        <span className="text-gray-500">or continue with</span>
                        <div className="flex-1 border-t border-amber-400"></div>
                    </div>
                    <form className='mt-10 flex flex-col gap-4 w-full'>
                    <div>
                        <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your Username"
                            />
                        </div>
                        <div>
                        <input
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your Email"
                            />
                        </div>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon className="w-5 h-5 text-gray-500" /> : <EyeIcon className="w-5 h-5 text-gray-500" />}
                            </button>
                        </div>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirm Password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon className="w-5 h-5 text-gray-500" /> : <EyeIcon className="w-5 h-5 text-gray-500" />}
                            </button>
                        </div>
                        <Button className='hover:cursor-pointer bg-amber-400 text-black font-bold py-6 hover:bg-white border-amber-400 border-1'  w-full>Sign Up</Button>
                    </form>
                    <p className='mt-4'>Already Registered? <span><Link href={'/signin'} className='font-bold text-amber-400'>Sign In</Link></span></p>
                </div> */}
            </div>
        </div>
    )
}

export default SignUp
