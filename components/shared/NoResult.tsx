import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Props{
    title:string,
    description:string,
    link:string,
    btnTxt:String,
}

const NoResult = ({title,description,link,btnTxt}:Props) => {
  return (
    <div className='mt-10 flex w-full flex-col items-center justify-center'>
        <Image src='/assets/images/light-illustration.png' height={200} width={270} alt='no results' className='block object-contain dark:hidden'/>
        <Image src='/assets/images/dark-illustration.png' height={200} width={270} alt='no results' className='hidden object-contain dark:block'/>
        <h2 className='h2-bold text-dark200_light900 mt-10'>{title}</h2>
        <p className='body-regular text-dark500_light700 my-3.5 max-w-md text-center'>{description}</p>
        <Link href={link}><Button className='paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-3 py-4 text-light-900'>{btnTxt}</Button></Link>
    </div>
  )
}

export default NoResult