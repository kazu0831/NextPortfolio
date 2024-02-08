/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { SkillData } from '@/types/getData'
import React, { useEffect, useState } from 'react'

const Skills = () => {
    const [skillData, setSkillData] = useState<SkillData | null>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/skill/get')
                const skill = await res.json()
                setSkillData(skill)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    const skillsArray = skillData ? skillData.skills.split(',') : []


    return (

        <div className='container flex flex-col items-center justify-center'>
            <h1 className='mb-20 font-bold text-4xl'>Skills</h1>
            <div className='w-3/4 md:w-2/3 flex flex-wrap items-center justify-center'>
                {skillsArray.map((skill, index) => (
                    <div className='bg-white bg-opacity-10 rounded-md text-center w-1/2 mb-4 md:w-[20%] py-6 border mr-4' key={index}>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills