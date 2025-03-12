'use client'
import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

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
                <div ref={sectionRef} className='grid md:grid-cols-2 gap-4 justify-center items-center'>
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
