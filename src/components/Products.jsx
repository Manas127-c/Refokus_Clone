import React from "react";
import Product from "./Product";

const Products = () => {
  const pdata = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      butt: "Live Website",
      live: true,
      case: false
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      butt: "Live Website",
      live: true,
      case: false
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      butt: "Live Website",
      live: true,
      case: false
    },
    {
      title: "YIR 2020",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      butt: "Live Website",
      live: true,
      case: false
    },
    {
      title: "Yahoo",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      butt: "Live Website",
      live: true,
      case: true
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      butt: "Live Website",
      live: true,
      case: true
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      butt: "Live Website",
      live: true,
      case: true
    },
  ];
  return (
    <div>
      {pdata.map((e, i) => (
        <Product key={i} val={e} />
      ))}
    </div>
  );
};

export default Products;
