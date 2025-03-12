'use client'
import { signOut } from "@/lib/auth";
import { Button } from "./ui/button"
import Image from "next/image";

const LogOut = () => {
    const handleSignOut = async () => {
        await signOut();
    };
    return (
        <div className='w-full'>
            <Button onClick={handleSignOut} className='hover:cursor-pointer bg-white text-black font-bold py-6 hover:bg-white border-gray-300 border-1' ><span><Image src='/assets/images/google.svg' alt='logo' width={20} height={20} className='' /> </span>Logur</Button>
        </div>
    );
};

export default LogOut;