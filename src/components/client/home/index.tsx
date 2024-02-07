/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useState } from 'react'
import Dino from '../three/Dino'
import { HomeData } from '@/types/getData'


const TOP = () => {

    const [homeData, setHomeData] = useState<HomeData | null>()
    const [projectsData, setProjectseData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/home/get')
                const home = await res.json()
                setHomeData(home)

                const res4 = await fetch('/api/projects/getAll')
                const projects = await res4.json()
                setProjectseData(projects)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    return (
        <div className='h-full container relative'>
            {homeData ? (

                <div className='flex flex-col items-center justify-center absolute bottom-72 left-20 md:left-24 z-10'>
                    <h1 className='text-center text-4xl md:text-6xl'>{homeData.title}</h1>
                    <p className='text-center mt-8 md:text-2xl'>{homeData.subtitle}</p>
                </div>
            ) : (
                <div>now loading</div>
            )}
            <Dino />
        </div>
    )
}

export default TOP