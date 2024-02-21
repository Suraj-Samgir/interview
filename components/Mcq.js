"use client"
import { React, useEffect, useState } from 'react'

export default function Mcq(){
    const [mcq, setMcq] = useState([]);
    const [currMcq, setCurrMcq] = useState(0);
    const [selected, setSelected] = useState(null);


    const getData = async ()=>{
        let res = await fetch("/api/data/mcqs");
        let data = await res.json();
        console.log(data);
        setMcq(data.data);
    }
    useEffect(()=>{
        getData();
    }, [])

    const next = ()=>{
        if(currMcq===mcq.length-1){
            setCurrMcq(0);
        }else{
            setCurrMcq(currMcq+1);
        }
        setSelected(null);
    }

    const prev = ()=>{
        if(currMcq===0){
            setCurrMcq(mcq.length-1);
        }else{
            setCurrMcq(currMcq-1);
        }
        setSelected(null);
    }

    return (
        <div className='mx-5 max-h-full min-h-fit'>{
            mcq.length ?
            <div className='flex flex-col gap-5'>
            <div>{mcq[currMcq].question}</div>
            <div className='flex flex-col gap-2'>{mcq[currMcq].options.map((option, index)=>{
                return (
                <div className='flex items-center gap-2'><input type="radio" value={index} checked = {selected === index} onChange={(e)=>setSelected(index)} id=""/>{option}</div>)
            })}</div>
            
            
            <div className='flex gap-2'>
                <button className='bg-orange-600 rounded-md p-2' onClick={next}>Next</button>
                <button className='bg-orange-600 rounded-md p-2' onClick={prev}>Prev</button>
            </div>
            </div> 
            : <h1>Question</h1>}
        </div>
    )
}