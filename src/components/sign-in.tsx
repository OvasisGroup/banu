import { signIn } from "@/lib/auth"
import { Button } from "./ui/button"
import Image from "next/image"

export default function Login() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <div className='w-full'>
                <Button  className='hover:cursor-pointer bg-white text-black font-bold py-6 hover:bg-white border-gray-300 border-1' ><span><Image src='/assets/images/google.svg' alt='logo' width={20} height={20} className='' /> </span>Login with Google</Button>
            </div>
        </form>
    )
} 