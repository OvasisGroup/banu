import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const GetStarted = () => {
  return (
    <div className='bg-blue-900 py-10'>
        <div className='container mx-auto px-4 flex flex-row gap-4 mt-10 justify-between items-center'>
            <div className=''>
                <h1 className='text-5xl text-white font-black w-2xl'>Looking for a premium accounting
                for your business?</h1>
            </div>
            <div className=''>
                <div className='fit-content hover:bg-blue-900 border-1 border-blue-600 bg-blue-600 px-4 p-y rounded-md flex flex-row gap-2 text-white py-4 px-8 h-full cursor-pointer justify-center items-center'>Get Started <ArrowUpRight /></div>
            </div>
        </div>
    </div>
  )
}

export default GetStarted
