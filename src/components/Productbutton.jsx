import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

const Productbutton = ({title = "Live Website"}) => {
    return (
        
            <div className='w-40 px-4 py-2 rounded-full bg-slate-50 flex items-center justify-between'>
           <span className=' text-sm font-medium text-zinc-900'> {title} </span>
           <IoIosReturnRight className='text-black'/>
           
        </div>
        
    );
}

export default Productbutton;
