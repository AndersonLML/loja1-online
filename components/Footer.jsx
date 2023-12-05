import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">

      <p>2023 Quebrando Ofertas. Todos os Direitos Reservados</p>

      <p className="icons">
        <Link href="https://www.instagram.com/systemtec3030/">
        <AiFillInstagram />
        </Link>
        <Link href="https://www.youtube.com/channel/UCXBuIY3eQxiwn42yWW-PmtQ">
        <AiFillYoutube />
        </Link>
        <Link href="https://br.linkedin.com/in/anderson-leite-730b13152">
        <AiFillLinkedin />
        </Link>
        <Link href="https://wa.me/5517991035026">
        <AiOutlineWhatsApp />
        </Link>
        
      </p>
    </div>
  );
};

export default Footer;
