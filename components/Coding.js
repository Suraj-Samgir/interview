"use client"
import { React, useEffect, useState } from 'react'

export default function Coding(){

    const [coding, setCoding] = useState([])
    const [currCoding, setcurrCoding] = useState(0)

    const getData = async ()=>{
        let res = await fetch("/api/data/coding");
        let data = await res.json();
        console.log(data);
        setCoding(data.data);
    }
    useEffect(()=>{
        getData();
    }, [])

    const next = ()=>{
        if(currCoding===coding.length-1){
            setcurrCoding(0);
        }else{
            setcurrCoding(currCoding+1);
        }
    }

    const prev = ()=>{
        if(currCoding===0){
            setcurrCoding(coding.length-1);
        }else{
            setcurrCoding(currCoding-1);
        }
    }
    
    return (
        <div  className='mx-5 max-h-full min-h-fit'>
            {
            coding.length ?
            <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>{coding[currCoding].question}</div>
            <div className='flex flex-col gap-2'>
                <div>Input</div>
                {typeof(coding[currCoding].input)==="object" ?<div>{
                    coding[currCoding].input.map(val=>{
                        return (
                            <span>{val} </span>
                        )
                    })
                    }</div> :<div>{coding[currCoding].input}</div>}
            </div>
            <div className='flex flex-col gap-2'>
                <div>Output</div>
                {typeof(coding[currCoding].output)==="object" ?<div>{
                    coding[currCoding].output.map(val=>{
                        return (
                            <span>{val} </span>
                        )
                    })
                    }</div> :<div>{coding[currCoding].output}</div>}
            </div>
            
            
            
            <div className='flex gap-2'>
                <button className='bg-orange-600 rounded-md p-2' onClick={next}>Next</button>
                <button className='bg-orange-600 rounded-md p-2' onClick={prev}>Prev</button>
            </div>
            </div> 
            : <h1>Question</h1>}

            
        </div>
    )
}