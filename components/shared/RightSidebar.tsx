import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import RenderTag from './RenderTag';

const hotQuestions = [
  { _id: '1', title: 'How do I use express as a custom server in NextJS?' },
  { _id: '2', title: 'Cascading Deletes in SQLAlchemy?' },
  { _id: '3', title: 'How to Perfectly Center a Div with Tailwind CSS?' },
  { _id: '4', title: 'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?' },
  { _id: '5', title: 'Redux Toolkit Not Updating State as Expected' },
];

const popularTags = [
  { _id: '1', name: 'javascript', totalQuestions: 5 },
  { _id: '2', name: 'react', totalQuestions: 5 },
  { _id: '3', name: 'next', totalQuestions: 5 },
  { _id: '4', name: 'vue', totalQuestions: 2 },
  { _id: '5', name: 'redux', totalQuestions: 10 },
]

const RightSidebar = () => {
  return (
    <section className='background-light900_dark200 custom-scrollbar border-1 sticky right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {hotQuestions.map((ques)=>{
            return(<Link
            className='flex cursor-pointer items-center justify-between gap-7'
             href={`/questions/${ques._id}`} key={ques._id}>
              <p className='body-medium text-dark500_light700 '>{ques.title}</p>
              <Image
               className='invert-colors'
               src={'/assets/icons/chevron-right.svg'} width={20} height={20} alt='arrow'/>
            </Link>)
          })}
        </div>
      </div>
      <div>
      <h3 className='h3-bold text-dark200_light900 mt-16'>Popular Tags</h3>
      <div className='mt-7 flex w-full flex-col gap-3'>
        {popularTags.map((tag)=>{
          return(<RenderTag
             _id={tag._id} name={tag.name} key={tag._id}
             totalQuestions={tag.totalQuestions}
             showCount={true}
             />)
        })}
      </div>
      </div>
    </section>
  )
}

export default RightSidebar