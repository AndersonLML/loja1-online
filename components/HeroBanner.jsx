import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <Link href={`/product/${heroBanner.product}`}>
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="comprar barato"
          className="hero-banner-image"
        />
        <div>
                   
          <div className="desc">

            <h5>Camisetas Unitárias e no Atacado</h5>

            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
      
    </div>
    </Link>
  );
};

export default HeroBanner;
