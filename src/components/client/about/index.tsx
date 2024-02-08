'use client'

import { AboutData } from '@/types/getData'
import React, { useEffect, useState } from 'react'
import vercelSVG from '../../../../public/vercel.svg'
import Image from 'next/image'

const About = () => {
    const [aboutData, setAboutData] = useState<AboutData | null>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res2 = await fetch('/api/about/get')
                const about = await res2.json()
                setAboutData(about)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])
    return (
        <div className='container flex flex-col items-center justify-center'>
            <h1 className='mb-20 font-bold text-4xl'>About me</h1>
            <div className='w-2/3 flex flex-col md:flex-row md:justify-between'>
                <div className='w-full md:w-1/3 mb-12 md:mr-12 flex items-center justify-center'>
                    <Image className='bg-white' alt='tmp' src={vercelSVG} />
                </div>

                <div className='w-full md:w-2/3'>
                    <p>Name : {aboutData?.name}</p>

                    <p className='mt-8'>Age : {aboutData?.age}</p>

                    <span className='mt-8 block'>Background : </span>
                    <p className='mt-2'>{aboutData?.education}</p>

                    <span className='mt-8 block'>Message : </span>
                    <p className='mt-2'>{aboutData?.message}</p>
                </div>
            </div>
        </div>
    )
}

export default About