import React from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";

import ProjectCard from "/components/ProjectCard.js";

// Image Imports
import Northernhay from "/public/acts-of-invisible-repair/northernhay.jpg";
import RiverValley from "/public/acts-of-invisible-repair/river-valley.jpg";
import HigherCemetery from "/public/acts-of-invisible-repair/higher-cemetery.jpg";
import StThomas from "/public/acts-of-invisible-repair/st-thomas.jpg";

const Index = () => {
  return (
    <>
      <Head>
        <title>Acts of (In) visible Repair | GPS Embroidery</title>
      </Head>

      <header className="flex flex-col items-start justify-start w-full h-56 pt-10 bg-header-img">
        <Header />

        {/* Title */}
        <div className="container z-20 mx-auto">
          <h2 className="mt-6 text-white">Acts of (In) visible Repair</h2>
        </div>

        {/* Overlay */}
        <div className="absolute z-10 w-full h-56 -mt-10 opacity-75 bg-gradient-to-t from-black"></div>
      </header>

      <main className="flex flex-col py-12 bg-gray-100">
        <div className="container pb-12 mx-auto">
          <p>
            This iteration of GPS Embroidery explored the unseen but essential
            networks within the urban environment of Exeter. We invited women
            and girls from different parts of the city to help us create GPS
            embroideries around the concept of repair.
          </p>
          <p>
            Through community mapping “walkshops” and an immersive audio
            performance, we shared the small but important ways we can enable
            biodiversity to thrive. This was one of six commissions from
            “Outside- the- Box”, which explored outdoor performances as a
            pandemic response.
          </p>
          <p className="pb-0 mb-0">
            It was supported by Exeter Culture, University of Exeter and the
            Arts and Humanities Research Council.
          </p>
          <p>
            The creative team for this project were Lizzie Philps, Frances
            Merriman and Anna Haydock Wilson. Local production was provided by
            Lizzy Humber, and media support by Niamh McCarthy
          </p>
        </div>
        <div className="container flex flex-wrap justify-between mx-auto">
          <ProjectCard
            title={"Northernhay Gardens"}
            tagline={"Chhaya Dance Collective Youth Group"}
            description={`This female led collective of young dancers responded to the theme of repair by stitching invisible connections between green
islands within this park, and
within the city...`}
            img={Northernhay}
            projectLink={`acts-of-invisible-repair/northernhay`}
            width={1920}
            height={1261}
          />

          <ProjectCard
            title={"Riverside Valley Park"}
            tagline={"Exeter Residents"}
            description={`It’s impossible to talk about environmental repair in Exeter without talking about the river. In all our workshops we heard stories of congested crossings, concreting versus planting…`}
            img={RiverValley}
            projectLink={`acts-of-invisible-repair/riverside-valley-park`}
            width={1920}
            height={1333}
          />

          <ProjectCard
            title={"St Thomas Pleasure Gardens"}
            tagline={"Local Residents"}
            description={`Urban parks offer shortcuts and social space within human networks, and can contain numerous invisible nonhuman webs and systems too. From the
fascinating fragility of insect life…`}
            img={StThomas}
            projectLink={`acts-of-invisible-repair/st-thomas`}
            width={1920}
            height={1333}
          />

          <ProjectCard
            title={"Higher Cemetery"}
            tagline={"Mothers Who Make"}
            description={`Cemeteries and graveyards make us think about our ancestors; including their approach to biodiversity. We zoomed in to the details of lichen and zoomed out
to GPS to position us in time as…`}
            img={HigherCemetery}
            projectLink={`acts-of-invisible-repair/higher-cemetery`}
            width={1920}
            height={1482}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Index;
