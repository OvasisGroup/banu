import React from 'react'

export default function Aboutus() {
    return (
        <div className='bg-white'>
            <div className='container mx-auto px-4 md:py-20 py-10 '>
                <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                    <div className='flex flex-col justify-center items-start'>
                        <small className='text-amber-400 font-bold'>ABOUT US</small>
                        <h1 className='font-black md:text-4xl text-3xl md:max-w-md'>Your trusted partner in accounting solutions</h1>
                    </div>
                    <div>
                        <p>Banu helps small business owners like you streamline bookkeeping and income taxes with dedicated experts and user-friendly financial software—saving you time and money so you can focus on growing your business. Our Services Include:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
