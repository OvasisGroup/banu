import Link from 'next/link'
import React from 'react'

export default function MainFooter() {
  return (
    <div className='bg-amber-400'>
        <div className='container mx-auto px-4 py-4 flex md:flex-row flex-col md:justify-between md:items-center'>
            <div>
            <p>Copyright © 2025, Banu. All rights reserved.</p>
            </div>
            <div className='flex md:flex-row flex-col md:justify-center md:items-center md:gap-4'>
            <Link href={'/'}><p className='font-bold cursor-pointer'>Terms & Conditions</p></Link>
            <Link href={'/'}><p className='font-bold cursor-pointer'>Privacy Policy</p></Link>
            </div>
        </div>
    </div>
  )
}
