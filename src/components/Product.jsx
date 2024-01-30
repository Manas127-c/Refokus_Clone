import React from "react";
import Productbutton from "./Productbutton";


const Product = ({val}) => {
  
  return (
    <div  className="w-full text-white py-20 px-20">
      <div className=" max-w-screen-xl  flex items-center justify-between ">
        <h1 className="text-6xl font-medium">{val.title}</h1>
        <div className="w-1/4">
          <p className="mb-5 text-lg ">
            {val.description}
          </p>
          <div className="flex gap-5">
            {val.live && <Productbutton/>}
            {val.case && <Productbutton title="Case Study"/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
