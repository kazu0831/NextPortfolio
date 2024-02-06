'use client'

import Link from 'next/link'
import React from 'react'

const Nav: React.FC = () => {

    return (
        <nav className='h-[80px] flex items-center justify-between px-6 bg-white bg-opacity-50 text-white font-bold top-0 fixed z-10 min-w-full '>
            <div className='py-6'>
                <Link href='#home'>
                    logo
                </Link>
            </div>

            <ul className='flex'>
                <li className='ml-4 w-16 text-center h-[80px] leading-[80px] hover:bg-pink-500 transition duration-300'>
                    <Link href='#about'>
                        About
                    </Link>
                </li>

                <li className='ml-4 w-16 text-center h-[80px] leading-[80px] hover:bg-pink-500 transition duration-300'>
                    <Link href='#skill'>
                        Skill
                    </Link>
                </li>

                <li className='ml-4 w-16 text-center h-[80px] leading-[80px] hover:bg-pink-500 transition duration-300'>
                    <Link href='#projects'>
                        Projects
                    </Link>
                </li>

                <li className='ml-4 w-16 text-center h-[80px] leading-[80px] hover:bg-pink-500 transition duration-300'>
                    <Link href='#contact'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav