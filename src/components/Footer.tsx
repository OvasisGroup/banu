import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight, Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-gray-900 text-white mt-10 py-15'>
        <div className='container mx-auto px-4 py-10'>
        <div className='grid md:grid-cols-3 gap-6'>
            <div className=''>
                <Image src='/assets/images/SVG/banu-white.svg' alt='logo' width={120} height={100} className='width={100}' />
                <p className='pt-6'>Banu simplifies small business finances. But our larger purpose expands beyond that. We’re here to help entrepreneurs understand what they want to do and where they want to go.</p>
                <Button className='mt-4 border-1 border-blue-600 bg-blue-600 hover:bg-blue-900 text-white cursor-pointer py-6 px-10 font-bold'>Get Started <ArrowUpRight /></Button>
            </div>
            <div className=''>
                <p className='font-black text-xl text-blue-600'>Quick Links</p>
                <Link href={'/'}><p className='font-bold cursor-pointer py-2 border-b-1 border-b-gray-700'>About</p></Link>
                <Link href={'/'}><p className='font-bold cursor-pointer py-2 border-b-1 border-b-gray-700'>Services</p></Link>
                <Link href={'/'}><p className='font-bold cursor-pointer py-2 border-b-1 border-b-gray-700'>Faq</p></Link>
                <Link href={'/'}><p className='font-bold cursor-pointer py-2 border-b-1 border-b-gray-700'>Pricing</p></Link>
            </div>
            <div className='md:text-right'>
            <p className='font-black text-xl text-blue-600 md:text-right'>Say Hello!</p>
                <p>+1 (614) 285‑9445</p>
                <p>info@banubookkeeping.com</p>
                <div className='flex flex-row gap-4 mt-6 md:justify-end text-white'>
                    <div className='bg-blue-600 p-2 rounded-full text-white'><Facebook/></div>
                    <div className='bg-blue-600 p-2 rounded-full text-white'><Twitter/></div>
                    <div className='bg-blue-600 p-2 rounded-full text-white'><Linkedin/></div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
