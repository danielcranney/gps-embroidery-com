import React from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ActsOfInvisibleRepairMenu from "../../components/ActsOfInvisibleRepairMenu";

import RiverValleyDetail from "/public/acts-of-invisible-repair/river-valley-2.jpg";

const RiversideValleyPark = () => {
  return (
    <div>
      <Head>
        <title>
          Riverside Valley Park | Acts of Invisible Repair | GPS Embroidery
        </title>
      </Head>

      <header
        className={`h-screen w-full flex flex-col pb-8 bg-riversideValleyPark bg-top bg-cover`}
      >
        <div className="pt-8">
          <Header />
        </div>
      </header>

      <main className={`bg-gray-100 w-full py-16 flex`}>
        <div className="container flex items-start mx-auto">
          <div className="flex flex-col w-full pr-8 md:w-3/4">
            <h1 className="mt-auto mb-6">Riverside Valley Park</h1>
            <h4>Exeter Residents</h4>
            <p>
              It’s impossible to talk about environmental repair in Exeter
              without talking about the river. In all our workshops we heard
              stories of congested crossings, concreting versus planting, the
              complexities of responsibility for broken weirs, or the success of
              flood relief channels. It seems an ongoing process of mending,
              reinforcing and patching up. This embroidery was stitched by
              participants in an immersive audio performance, which wove
              instructions for embroidery stitches with snippets of local voices
              that have floated downstream.
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
              <Image src={RiverValleyDetail} width={1920} height={1333} />
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

export default RiversideValleyPark;
