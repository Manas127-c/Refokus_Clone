import React from 'react';

const Marquee = ({idata}) => {
    return (
        <div className='w-full flex py-8 gap-20 overflow-hidden'>
            {idata.map((im,i)=><img key={i} src={im} alt="" className='w-32 flex-shrink-0'/>)}  
            {idata.map((im,i)=><img key={i} src={im} alt="" className='w-32 flex-shrink-0'/>)}          
        </div>
    );
}

export default Marquee;
