import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "/components/ProjectCard.js";

// Brexit
import Blaenavon from "/public/brexit/blaenavon.jpg";
// People Who
import VictoriaPark from "/public/people-who-mother/victoria-park.jpg";
// Acts of
import RiverValley from "/public/acts-of-invisible-repair/river-valley.jpg";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | GPS Embroidery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col items-start justify-start w-full h-56 pt-10 bg-header-img">
        <Header />

        {/* Title */}
        <div className="container z-20 mx-auto">
          <h2 className="mt-6 text-white">Projects</h2>
        </div>

        {/* Overlay */}
        <div className="absolute z-10 w-full h-56 -mt-10 opacity-75 bg-gradient-to-t from-black"></div>
      </header>

      <main className="py-12 bg-gray-100">
        <div className="container flex flex-col flex-wrap justify-between mx-auto md:flex-row"></div>
      </main>

      <Footer />
    </>
  );
};

export default Projects;
