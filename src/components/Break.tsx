import React from 'react'

export default function Break() {
  return (
    <div className='bg-white'>
        <div className='mx-4 md:mx-0  bg-white'>
        <div className='container mx-auto bg-[url("/assets/images/break-bg.jpg")] bg-no-repeat bg-cover bg-center rounded-3xl py-10'>
            <div className='grid md:grid-cols-2 justify-end items-end p-10'>
                <div className=''>
                    <small className='font-black text-blue-400'>WHY CHOOSE US</small>
                    <h1 className='md:text-3xl text-2xl font-black text-white'>Experience seamless, secure, and
                    efficient account management</h1>
                </div>
                <div className='flex flex-col justify-center md:items-end mt-4 md:mt-0'>
                    <h1 className='font-black text-3xl text-blue-400'>12 Years</h1>
                    <p className='font-bold text-white'>in accounting services</p>
                </div>
            </div>   
        </div>
        </div>
    </div>
  )
}
