'use client'

import { AboutData } from '@/types/getData'
import React, { useEffect, useState } from 'react'

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
        <div className='flex flex-col'>
            <p>{aboutData?.name}</p>
            <p>{aboutData?.age}</p>
            <p>{aboutData?.education}</p>
            <p>{aboutData?.message}</p>
        </div>
    )
}

export default About