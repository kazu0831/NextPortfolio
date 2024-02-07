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

    return (
        <div>
            {skillData?.skills}
        </div>
    )
}

export default Skills