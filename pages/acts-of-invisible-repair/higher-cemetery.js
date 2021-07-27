import React from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ActsOfInvisibleRepairMenu from "../../components/ActsOfInvisibleRepairMenu";

import HigherCemeteryDetail1 from "/public/acts-of-invisible-repair/higher-cemetery-detail-1.jpg";
import HigherCemeteryDetail2 from "/public/acts-of-invisible-repair/higher-cemetery-detail-2.jpg";
import HigherCemeteryDetail3 from "/public/acts-of-invisible-repair/higher-cemetery-detail-3.jpg";
import HigherCemeteryDetail4 from "/public/acts-of-invisible-repair/higher-cemetery-detail-4.jpg";

const HigherCemetery = () => {
  return (
    <div>
      <Head>
        <title>
          Higher Cemetery | Acts of Invisible Repair | GPS Embroidery
        </title>
      </Head>

      <header
        className={`h-screen w-full flex flex-col pb-8 bg-higherCemetery bg-top bg-cover`}
      >
        <div className="pt-8">
          <Header />
        </div>
      </header>

      <main className={`bg-gray-100 w-full py-16 flex`}>
        <div className="container flex items-start mx-auto">
          <div className="flex flex-col w-full pr-8 md:w-3/4">
            <h1 className="mt-auto mb-6">Higher Cemetery</h1>
            <h4>Mothers Who Make</h4>
            <p>
              Cemeteries and graveyards make us think about our ancestors;
              including their approach to biodiversity. We zoomed in to the
              details of lichen and zoomed out to GPS to position us in time as
              well as space. As we embroidered a tree of maternal lineage, we
              considered the legacies we have inherited and ways in which our
              creative practice can have a restorative role for future
              generations.
            </p>

            <div className="flex flex-wrap w-full">
              <div className="w-full p-2 md:w-1/2">
                <Image
                  src={HigherCemeteryDetail1}
                  width={900}
                  height={582}
                  alt={"Higher Cemedy close-up"}
                />
              </div>
              <div className="w-full p-2 md:w-1/2">
                <Image
                  src={HigherCemeteryDetail2}
                  width={900}
                  height={582}
                  alt={"Higher Cemedy close-up"}
                />
              </div>
              <div className="w-full p-2 md:w-1/2">
                <Image
                  src={HigherCemeteryDetail3}
                  width={900}
                  height={582}
                  alt={"Higher Cemedy close-up"}
                />
              </div>
              <div className="w-full p-2 md:w-1/2">
                <Image
                  src={HigherCemeteryDetail4}
                  width={900}
                  height={582}
                  alt={"Higher Cemedy close-up"}
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

export default HigherCemetery;
