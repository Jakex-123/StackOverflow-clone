import React from 'react'
import RenderTag from '../shared/RenderTag'
import Link from 'next/link';

// const arr=['Javascript','react.js','Invalid Fields','Salesforce'];


interface QuestionProps {
    _id: string;
    title: string;
    tags: {
        id: string;
        name: string;
    }[];
    author: {
      id: string;
      name: string;
      avatar: string;
    };
    upvotes: number;
    views: number;
    answers: Array<object>;
    createdAt: Date;
  }

const QuestionCard = ({_id,title,tags,author,upvotes,views,answers,createdAt}:QuestionProps) => {
  return (
    <div className='card-wrapper rounded-[10px] p-9 sm:px-11'>
        <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
            <div>
                <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>{String(createdAt)}</span>
                <Link href={`/question/${_id}`}>
                  <h3 className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1'>
                    {title}
                  </h3>
                </Link>
            </div>
        </div>
            <div className='mt-3.5 flex flex-wrap gap-2'>
                {tags.map((tag)=>{
                   return <RenderTag key={tag?.id} _id={tag?.id} name={tag?.name}/>
                })}
            </div>
            <div className='flex sm:flex-col'>
                
            </div>

    </div>
  )
}

export default QuestionCard