import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,downtext,downpara,background,hover}) {
  return (
    <div className={`${background} group/item hover:${hover} text-white p-5 ${width} rounded-[20px] min-h-[27rem] flex flex-col justify-between transition-colors`}>
        <div className='heading w-full group-hover/item:px-1 transition-all ease-linear'>
            <div className='flex items-center justify-between'>
            <h1 className='text-sm'>One Heading</h1>
            <IoIosArrowRoundForward/>
            </div>
            <h2 className='text-2xl mt-5 font-medium'>Two Heading</h2>
        </div>
        <div className='down w-full'>
            {
                downtext && (<><h1 className='text-8xl font-medium tracking-tight leading-none'>Start a Project</h1>
                <button className='px-6 py-2 rounded-full border-[1px] mt-5'>Contact Us</button></>)
            }
            {
                downpara && (<><p className='text-sm font-regular text-zinc-400'>Explore what drives our team.</p></>)
            }
        </div>
    </div>
  )
}

export default Card