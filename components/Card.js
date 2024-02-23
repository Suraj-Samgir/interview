"use client"
import {React,useState} from 'react'
import Link from 'next/link'

export default function Card({title,desc,buttontext,setIsOpen }) {

  return (
    <>
      <div className="flex flex-col  p-6 bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <div className="flex grow flex-row-reverse">
          <div className="flex flex-col-reverse">
            <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" onClick={() => setIsOpen(true)}>
              {buttontext}
            </button>
          </div>
        </div>  
      </div>

    </>
  );
}
