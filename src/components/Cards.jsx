import React from 'react';
import Card from './Card';

const Cards = () => {
    return (
        <div className=' max-w-screen-xl mx-auto py-20 flex gap-1'>
            <Card width={"basis-1/3"} downtext={false} downpara={true} background={"bg-zinc-800"} hover={"bg-zinc-700"}/>
            <Card width={"basis-2/3"} downtext={true} downpara={false} background={"bg-zinc-700"} hover={"bg-violet-600"}/>
        </div>
    );
}

export default Cards;
