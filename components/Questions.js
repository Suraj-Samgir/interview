"use client"
import { React, useEffect, useState } from 'react'
import DropDown from '@/components/DropDown';
import Mcq from '@/components/Mcq';
import Coding from '@/components/Coding';
import Link from 'next/link'

export default function Questions(){

    const [type, setType] = useState("MCQ")
    return (
        <>
            <div className='h-96 w-full flex flex-col justify-center items-start gap-12'>
                <div className=''><DropDown qType = {setType} curr = {type}/></div>
                <div >
                    {type === "MCQ" ? <Mcq/> : <Coding/>}
                </div>
            </div>
        </>
    )
}