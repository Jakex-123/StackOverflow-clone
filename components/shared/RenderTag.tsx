import React from 'react'
import { Badge } from '../ui/badge'
import Link from 'next/link'

interface Props{
    _id:string,
    name:string,
    totalQuestions?:number,
    showCount?:Boolean
}

const RenderTag = ({_id,name,totalQuestions,showCount}:Props) => {
  return (
    <Link href={`/tags/${_id}`} className='flex cursor-pointer items-center justify-between'>
        <Badge className='background-light800_dark300 text-light400_light500 subtle-medium rounded-md border-none px-4 py-2 uppercase'>
            {name}
        </Badge>
        {showCount&&
        <p className='small-medium text-dark500_light700'>{totalQuestions}+</p>}
    </Link>
  )
}

export default RenderTag