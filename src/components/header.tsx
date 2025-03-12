'use client'
import gsap from "gsap";
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'


export default function Header() {
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(textRef.current, {
            x: -200,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(imageRef.current, {
                x: 200,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5"); // Start slightly before text finishes

    }, []);

    return (
        <section className=' min-h-200 flex justify-center items-center'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 gap-4 mt-10'>
                <div ref={textRef} className='flex flex-col justify-center items-start md:max-w-xl'>
                    <h1 className='font-black md:text-5xl mb-3 text-3xl'>Reliable and transparent finances. Enjoy complete peace of mind.</h1>
                    <p>Banu helps small business owners like you streamline bookkeeping and income taxes with dedicated experts and user-friendly financial software—saving you time and money so you can focus on growing your business.</p>
                    <div className='flex flex-row gap-4'><Button className='mt-4 border-2 border-amber-400 bg-amber-400 hover:bg-white text-black cursor-pointer py-6 px-10 font-bold'>Get Started <ArrowUpRight /></Button><Button className='mt-4 border-2 border-amber-400 bg-white text-black cursor-pointer py-6 px-6 font-bold hover:bg-amber-400'>Our Services <ArrowUpRight /></Button></div>
                </div>
                <div className=''>
                    <Image ref={imageRef} src='/assets/images/hero-image.png' alt='hero' width={1000} height={400} />
                </div>
            </div>
        </section>
    )
}
