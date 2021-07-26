import React from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ActsOfInvisibleRepairMenu from "../../components/ActsOfInvisibleRepairMenu";

import StThomasDetail from "/public/acts-of-invisible-repair/st-thomas-2.jpg";

const StThomas = () => {
  return (
    <div>
      <Head>
        <title>
          St Thomas Pleasure Gardens | Acts of Invisible Repair | GPS Embroidery
        </title>
      </Head>

      <header
        className={`h-screen w-full flex flex-col pb-8 bg-stThomas bg-top bg-cover`}
      >
        <div className="pt-8">
          <Header />
        </div>
      </header>

      <main className={`bg-gray-100 w-full py-16 flex`}>
        <div className="container flex items-start mx-auto">
          <div className="flex flex-col w-full pr-8 md:w-3/4">
            <h1 className="mt-auto mb-6">St Thomas Pleasure Gardens</h1>
            <h4>Local Residents</h4>
            <p>
              Urban parks offer shortcuts and social space within human
              networks, and can contain numerous invisible nonhuman webs and
              systems too. From the fascinating fragility of insect life to the
              global applications of GPS as a tool of big power and of
              conservation management, we explored layers of interconnection,
              and how these might be strengthened through simple actions.
            </p>
            <p>
              This iteration of GPS Embroidery explored the unseen but essential
              networks within the urban environment of Exeter.
            </p>
            <p>
              We invited women and girls from different parts of the city to
              help us create GPS embroideries around the concept of repair.
              Through community mapping “walkshops” and an immersive audio
              performance, we shared the small but important ways we can enable
              biodiversity to thrive.
            </p>
            <p>
              This was one of six commissions from“Outside-the- Box”, which
              explored outdoor performances as a pandemic response. It was
              supported by Exeter Culture, University of Exeter and the Arts and
              Humanities Research Council.
            </p>
            <div className="flex flex-wrap w-full">
              <Image src={StThomasDetail} width={1920} height={1333} />
            </div>
          </div>
          <div className="flex-col hidden h-full pl-8 border-l border-gray-200 md:flex md:w-1/4">
            <ActsOfInvisibleRepairMenu />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StThomas;
