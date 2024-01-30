import React from 'react';
import { Link } from 'react-router-dom';
import Navbutton from './Navbutton';

const Navbar = () => {
    return (
        <div className=' max-w-screen-xl mx-auto py-7 px-1 flex items-center justify-between border-b-[1px] border-zinc-700 mb-16'>
         <div className='nleft flex'>
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            <div className='links flex gap-14 ml-20 font-regular'>
                {['Home','Work','Culture','','News'].map((e,i)=>
                (
                    e.length===0 ? <span key={i} className='w-0.5 h-6 bg-zinc-800'></span>:(<Link key={i} className='text-sm text-zinc-100 flex items-center gap-1' to='/'>{i===1 && (<span style={{boxShadow:'0 0 0.25em #00FF19'}} className=' inline-block w-1 h-1 rounded-full bg-green-500'></span>)}{e}</Link>)
                ))}
            </div>
         </div>
        <Navbutton/>
        </div>
    );
}

export default Navbar;
