'use client'
import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

export default function Aboutus() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const elements = sectionRef.current?.querySelectorAll(".reveal");
    
        elements?.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%", // Adjust when the animation starts
                end: "bottom 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }, []);

    return (
        <div  className='bg-white'>
            <div className='container mx-auto px-4 md:py-20 py-10 '>
                <div  className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                    <div className='flex flex-col justify-center items-start'>
                        <small className='text-amber-400 font-bold'>ABOUT US</small>
                        <h1 className='font-black md:text-4xl text-3xl md:max-w-md'>Your trusted partner in accounting solutions</h1>
                    </div>
                    <div>
                        <p>Banu helps small business owners like you streamline bookkeeping and income taxes with dedicated experts and user-friendly financial software—saving you time and money so you can focus on growing your business. Our Services Include:</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-4 md:gap-10 gap-6  justify-center items-center mt-10 '>
                    <div className='flex flex-col justify-start items-start border-1 border-amber-400 p-10 rounded-3xl'>
                    <div className='bg-amber-400 p-6 rounded-4xl mb-4'><Image src='/assets/images/book-keeping.png' width={50} height={50} alt='book keeping' className='' /></div>
                        <p className='font-black text-xl '>Book Keeping And Accounting</p>
                    </div>
                    <div className='flex flex-col justify-start items-start border-1 border-amber-400 p-10 rounded-3xl'>
                    <div className='bg-amber-400 p-6 rounded-4xl mb-4'><Image src='/assets/images/tax.png' width={50} height={50} alt='book keeping' className='' /></div>
                        <p className='font-black text-xl '>Tax Planning And Preparation</p>
                    </div>
                    <div className='flex flex-col justify-start items-start border-1 border-amber-400 p-10 rounded-3xl'>
                    <div className='bg-amber-400 p-6 rounded-4xl mb-4'><Image src='/assets/images/consultation.png' width={50} height={50} alt='book keeping' className='' /></div>
                        <p className='font-black text-xl'>Business Advisory Service</p>
                    </div>
                    <div className='flex flex-col justify-start items-start border-1 border-amber-400 p-10 rounded-3xl'>
                        <div className='bg-amber-400 p-6 rounded-4xl mb-4'><Image src='/assets/images/evaluation.png' width={50} height={50} alt='book keeping' className='' /></div>
                        <p className='font-black text-xl'>Financial Statement Preparation</p>
                    </div>                  
                </div>
            </div>
        </div>
    )
}
