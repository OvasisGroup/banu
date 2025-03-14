import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
    return (
        <div className='bg-white'>
            <div className='container mx-auto py-10 px-6 md:px-0'>
                <div className='grid md:grid-cols-3 gap-6 justify-center items-center'>
                    <div className='p-10 bg-blue-600 min-h-80 rounded-3xl'>
                        <Image src='/assets/images/SVG/relationship.svg' width={100} height={100} alt='book keeping' className='mb-6' />
                        <p className='font-bold text-white  text-xl'>We prioritize building long-term relationships with our clients and always put their needs first.</p>
                    </div>
                    <div className='p-10 bg-blue-900 min-h-80 rounded-3xl'>
                    <Image src='/assets/images/SVG/customers.svg' width={100} height={100} alt='book keeping' className='mb-6' />
                        <p className='font-bold text-white  text-xl'>Every client is unique, and we tailor our services to fit your individual circumstances and goals.</p>
                    </div>
                    <div className='p-10 bg-blue-900 min-h-80 rounded-3xl'>
                    <Image src='/assets/images/SVG/technology.svg' width={100} height={100} alt='book keeping' className='mb-6' />
                        <p className='font-bold text-white  text-xl'>We leverage cutting-edge technology and software to streamline processes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
