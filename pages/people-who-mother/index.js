import React from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";

import ProjectCard from "/components/ProjectCard.js";

// Image Imports
import AshtonCourt from "/public/people-who-mother/ashton-court.jpg";
import KnowleWest from "/public/people-who-mother/knowle-west.jpg";
import CamPeakView from "/public/people-who-mother/cam-peak-view.jpg";
import VictoriaPark from "/public/people-who-mother/victoria-park.jpg";
import WhaleWharf from "/public/people-who-mother/whale-wharf.jpg";
import GroznezPoint from "/public/people-who-mother/groznez-point.jpg";
import LaRocque from "/public/people-who-mother/la-rocque.jpg";
import UphillBeach from "/public/people-who-mother/uphill-beach.jpg";
import LondonSuburbs from "/public/people-who-mother/london-suburbs.jpg";
import CheddarGorge from "/public/people-who-mother/cheddar-gorge.jpg";

const Index = () => {
  return (
    <>
      <Head>
        <title>People Who Mother | GPS Embroidery</title>
      </Head>

      <header className="flex flex-col items-start justify-start w-full h-56 pt-10 bg-header-img">
        <Header />

        {/* Title */}
        <div className="container z-20 mx-auto">
          <h2 className="mt-6 text-white">People Who Mother</h2>
        </div>

        {/* Overlay */}
        <div className="absolute z-10 w-full h-56 -mt-10 opacity-75 bg-gradient-to-t from-black"></div>
      </header>

      <main className="py-12 bg-gray-100">
        <div className="container flex flex-wrap justify-between mx-auto">
          <ProjectCard
            title={"Ashton Court"}
            tagline={"Straighten up and fly right (Nat King Cole)"}
            description={`A group of mothers from Bristol chose the are of Ashton Court where
            the music festival used to be held to embroider song lyrics. We
            chose songs we…`}
            img={AshtonCourt}
            projectLink={`/people-who-mother/ashton-court`}
            width={1920}
            height={1290}
          />

          <ProjectCard
            title={"Knowle West"}
            tagline={"Truth (Kayley, Hayley, Becky)"}
            description={`Young mothers from Knowle West took part in a year long project about data, during which they got savvy about the way their online information is used…`}
            img={KnowleWest}
            projectLink={`/people-who-mother/knowle-west`}
            width={1920}
            height={1286}
          />

          <ProjectCard
            title={"Cam Peak View, Dursley"}
            tagline={"Moon (Chloe)"}
            description={`Mothers at Dursley Library wanted to find a way to create alongside their children. I like the sense of going round in circles of this embroidery. It speaks to me…`}
            img={CamPeakView}
            projectLink={`/people-who-mother/cam-peak-view`}
            width={1920}
            height={1286}
          />

          <ProjectCard
            title={"Victoria Park, Gloucester"}
            tagline={"Sexy Lady (Katrina)"}
            description={`At Gloucester Library I worked with mothers whose children have additional needs. They wanted to talk about sex, and wrote the lind of words you sometimes see…`}
            img={VictoriaPark}
            projectLink={`/people-who-mother/victoria-park`}
            width={1920}
            height={1285}
          />

          <ProjectCard
            title={"Whale Wharf, Littleton on Severn"}
            tagline={"We walk on the bed of the sea of the air (JR Carpenter)"}
            description={`I worked with writer Mary Paterson, digital artist JR Carpenter and cinematographer Adam Laity. On the river Severn, we explored the layers of geological preservation in…`}
            img={WhaleWharf}
            projectLink={`/people-who-mother/whale-wharf`}
            width={1920}
            height={1290}
          />

          <ProjectCard
            title={"Groznez Point, Jersey"}
            tagline={"Sigh Of All The Seas (Emily Bronte/Callie Nestleroth)"}
            description={`Northern Jersey is wild and windswept, and we embroidered our words across heather and gorseland. The process of GPS embroidery involves walking…`}
            img={GroznezPoint}
            projectLink={`/people-who-mother/groznez-point`}
            width={1920}
            height={1286}
          />

          <ProjectCard
            title={"La Rocque, Jersey"}
            tagline={"La Mer Est La Mere (Sarah Dufayard)"}
            description={`I ran a DIY Artist residency with Live Art Development Agency in Sept 2017. Jersey’s relationship to the UK mainland brought up analogies to the UK’s relationship…`}
            img={LaRocque}
            projectLink={`/people-who-mother/la-rocque`}
            width={1920}
            height={1358}
          />

          <ProjectCard
            title={"Uphill Beach, Weston Super Mare"}
            tagline={
              "A child who is silent until learning to speak (Niall Farnan)"
            }
            description={`A group of graduates from Bristol Institute for Performing Arts, all of whom mother, used the embroideries of other groups as stimulus and wrote about their own…`}
            img={UphillBeach}
            projectLink={`/people-who-mother/uphill-beach`}
            width={1920}
            height={1285}
          />

          <ProjectCard
            title={"London Suburbs"}
            tagline={"Walk with my head (think with my feet) (Sarah Dufayard)"}
            description={`Sarah and I met on the LADA DIY residency I ran in Jersey, but she took a GPS tracker back to London to embroider some more. She described this sentence as…`}
            img={LondonSuburbs}
            projectLink={`/people-who-mother/london-suburbs`}
            width={1920}
            height={1285}
          />

          <ProjectCard
            title={"Cheddar Gorge, Somerset"}
            tagline={"Armenian girls do it closer to home (Silva Semerciyan)"}
            description={`I wrote this with Armenian American playwright Silva Semerciyan in April 2021, as we came out of lockdown. Our conversations meandered...`}
            img={CheddarGorge}
            projectLink={`/people-who-mother/cheddar-gorge`}
            width={1920}
            height={1285}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Index;
