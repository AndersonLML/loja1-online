import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Distribuidor de Roupas</title>
        <meta
          name="Descrição"
          content="Quebrando Ofertas - Distribuidor de Roupas."
        />
        <link rel='icon' href='/zishop.ico' /> 
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
