import React from 'react';

const Stripe = ({elem}) => {
    return (elem.length===0 ? (<span className=" w-[1px] h-full bg-zinc-600"></span>):
        (
        <div  className="h-full w-1/6 relative flex items-center justify-between px-3">
            <img src={elem.url} alt="" />
            <h1 className='text-white font-semibold'>{elem.num}</h1>
        </div>
        
        )
        
    );
}

export default Stripe;
