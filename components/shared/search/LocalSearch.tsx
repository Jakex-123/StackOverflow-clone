"use client"

import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

interface Props{
    route:string,
    iconPosition:string,
    imgSrc:string,
    placeholder:string,
    otherClasses:string
}

const LocalSearch = ({
    route,iconPosition,imgSrc,placeholder,otherClasses
}:Props) => {
  return (
    <div className={`${otherClasses} background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4`}>
      {iconPosition==="left" &&  <Image src={imgSrc} width={24} height={24} className='cursor-pointer ' alt='search icon'/>}
        <Input type ="text" className='text-dark400_light700 paragraph-regular placeholder no-focus border-none bg-transparent shadow-none outline-none' placeholder={placeholder} onChange={()=>{}}/>
        {iconPosition==="right" &&  <Image src={imgSrc} width={24} height={24} className='cursor-pointer ' alt='search icon'/>}
    </div>
  )
}

export default LocalSearch