import React from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Link from "next/link";
import ActsOfInvisibleRepairMenu from "../../components/ActsOfInvisibleRepairMenu";

import Northernhay2 from "/public/acts-of-invisible-repair/northernhay-2.jpg";

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
            <div className="flex flex-wrap w-full">
              <div className="w-full p-2">
                <Image
                  src={Northernhay2}
                  width={1920}
                  height={1248}
                  alt={"Northernhay embroidery close-up"}
                />
              </div>
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

export default Northernhay;
