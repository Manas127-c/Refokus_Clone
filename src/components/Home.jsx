import React from "react";

const Home = () => {
  var images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isactive: false,
    },
  ];
  return (
    <div className=" max-w-screen-xl mx-auto relative text-center">
      <h1 className="text-[37vw] text-white leading-none font-medium">
        work
      </h1>
      <div className="absolute w-full h-full top-0">
        {images.map(
          (e, i) =>
            e.isactive && (
              <img
                key={i}
                className="absolute w-60 rounded-md -translate-x-[50%] -translate-y-[50%]"
                src={e.url}
                style={{ top: e.top, left: e.left }}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
