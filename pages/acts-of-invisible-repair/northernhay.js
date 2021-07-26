import React from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Link from "next/link";
import ActsOfInvisibleRepairMenu from "../../components/ActsOfInvisibleRepairMenu";

const Northernhay = () => {
  return (
    <div>
      <Head>
        <title>Northernhay | Acts of Invisible Repair | GPS Embroidery</title>
      </Head>

      <header
        className={`h-screen w-full flex flex-col pb-8 bg-northernhay bg-top bg-cover`}
      >
        <div className="pt-8">
          <Header />
        </div>
      </header>

      <main className={`bg-gray-100 w-full py-16 flex`}>
        <div className="container flex items-start mx-auto">
          <div className="flex flex-col w-full pr-8 md:w-3/4">
            <h1 className="mt-auto mb-6">Northernhay Gardens</h1>
            <h4>Chhaya Dance Collective Youth Group</h4>
            <p>
              This female led collective of young dancers responded to the theme
              of repair by stitching invisible connections between green islands
              within this park, and within the city. They used the slow
              movements of Chi Gong and the contrasting speed of the GPS signal
              to compose these energetic embroideries as they traversed the
              space.
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

export default Northernhay;
