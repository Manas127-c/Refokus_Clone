import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  const sdata = [
    { url: `https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg`, num: 48 },
    "",
    { url: `https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg`, num: 2},
    "",
    { url: `https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg`, num: 11 },
    "",
    { url: `https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg`, num: 48 },
    "",
    { url: `https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg`, num: 2},
    "",
    { url: `https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg`, num: 11 },
  ];
  return (
    <>
      <div className=" min-w-full border-[1px] border-zinc-600 border-x-0 h-16 mt-16 flex mb-32">
        {sdata.map((e,i)=>(<Stripe key={i} elem={e}/>))}
      </div>
    </>
  );
};

export default Stripes;
