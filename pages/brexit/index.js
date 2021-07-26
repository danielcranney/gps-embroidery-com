import React from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";

import ProjectCard from "/components/ProjectCard.js";

// Image Imports
import AlexandraPark from "/public/brexit/alexandra-park.jpg";
import Blaenavon from "/public/brexit/blaenavon.jpg";
import BreanHead from "/public/brexit/brean-head.jpg";
import BritishCamp from "/public/brexit/british-camp.jpg";
import Grasmere from "/public/brexit/grasmere.jpg";
import Langdale from "/public/brexit/langdale.jpg";
import LowerSlaughter from "/public/brexit/lower-slaughter.jpg";
import PlymouthHoe from "/public/brexit/plymouth-hoe.jpg";
import Stonehenge from "/public/brexit/stonehenge.jpg";
import WhiteCliffs from "/public/brexit/white-cliffs-of-dover.jpg";

const Index = () => {
  return (
    <>
      <Head>
        <title>Brexit | GPS Embroidery</title>
      </Head>

      <header className="flex flex-col items-start justify-start w-full h-56 pt-10 bg-header-img">
        <Header />

        {/* Title */}
        <div className="container z-20 mx-auto">
          <h2 className="mt-6 text-white">Brexit</h2>
        </div>

        {/* Overlay */}
        <div className="absolute z-10 w-full h-56 -mt-10 opacity-75 bg-gradient-to-t from-black"></div>
      </header>

      <main className="py-12 bg-gray-100">
        <div className="container flex flex-wrap justify-between mx-auto">
          <ProjectCard
            title={"Stonehenge"}
            tagline={
              "I hail the law formed to serve the strong. In vain we argue rail and chide (Lucy Aitken)"
            }
            description={`Stonehenge is the location where single mother Tess Of The Durbervilles is arrested, for crimes which were forced on her by circumstance. As I walked this embroidery…`}
            img={Stonehenge}
            projectLink={`/brexit/stonehenge`}
            width={1280}
            height={860}
          />

          <ProjectCard
            title={"White Cliffs of Dover"}
            tagline={
              "(A traveller) weary toil subdued, I reached a country strange and rude (Matilda Betton)"
            }
            description={`The rest of this quote (which I didnt have time to embroider) is “and trembled, lest, approaching eve, my thoughts of shelter should decieve”. I think it captures the…`}
            img={WhiteCliffs}
            projectLink={`/brexit/white-cliffs-of-dover`}
            width={1280}
            height={857}
          />

          <ProjectCard
            title={"Grasmere, Lake District"}
            tagline={
              "Happily we cannot shape the mountain to our fancy (Dorothy Wordsworth)"
            }
            description={`Dorothy Wordsworth was not a biological mother, but she mothered. I admire her not only for her brilliant writing (overshadowed and sometimes appropriated by her…`}
            img={Grasmere}
            projectLink={`/brexit/grasmere`}
            width={1920}
            height={1286}
          />

          <ProjectCard
            title={"Blaenavon, Welsh Valleys"}
            tagline={"Thou steered them wrong thou helmsman vile (Mary Howitt)"}
            description={`I embroidered this on a slag heap, next to a closed coal mine which is now a tourist attraction. South Wales registered a “Leave” vote in the referendum. I struggled to…`}
            img={Blaenavon}
            projectLink={`/brexit/blaenavon`}
            width={1280}
            height={860}
          />

          <ProjectCard
            title={"Langdale, Lake District"}
            tagline={
              "Thinks thou Britain still to rest at ease (an island Queen amidst thy subject seas). (Laetitia Barbauld)"
            }
            description={`Langdale is stunning. If you were making a political broadcast with a nationalist agenda, you’d use it to show what needs defending against those marauding hordes…`}
            img={Langdale}
            projectLink={`/brexit/langdale`}
            width={1280}
            height={905}
          />

          <ProjectCard
            title={"British Camp, Malvern"}
            tagline={
              "In this sea fenced isle survey scenes to make the sick heart shudder. (Charlotte Smith)"
            }
            description={`Elgar, the composer of “Pomp and Circumstance” (from which this famous lyric is taken) was born nearby.`}
            img={BritishCamp}
            projectLink={`/brexit/british-camp`}
            width={1920}
            height={1285}
          />

          <ProjectCard
            title={"Plymouth Hoe"}
            tagline={
              "What is Empire? The privilege to punish and enjoy and think ourselves immortal (Hannah More)"
            }
            description={`I embroidered this using a lighthouse and naval statues as landmarks. It was early in the morning, and apart from the dog-walkers, the only other person I encountered…`}
            img={PlymouthHoe}
            projectLink={`/brexit/plymouth-hoe`}
            width={1920}
            height={1290}
          />

          <ProjectCard
            title={"Brean Head Napoleonic Fort"}
            tagline={
              "Advancing clouds from every point of heaven brood aloft o’er the enpurpled earth (Johanna Baillie)"
            }
            description={`I like places where you can see where you are in the world. From here you can see Glastonbury Tor and Wales. It gives you a sense of the bigger picture.`}
            img={BreanHead}
            projectLink={`/brexit/brean-head`}
            width={1920}
            height={1285}
          />

          <ProjectCard
            title={"Lower Slaughter, Cotswolds"}
            tagline={
              "The cottages of England! Fearless there the lowly sleep. (Felicity Homans)"
            }
            description={`There is a working watermill here, swans in the ford and little bridges over the stream. It looks like a Constable painting, or a location for a period drama. The average house…`}
            img={LowerSlaughter}
            projectLink={`/brexit/lower-slaughter`}
            width={1920}
            height={1285}
          />

          <ProjectCard
            title={"Alexandra Park, Belfast"}
            tagline={
              "People are almost always better than their neighbours think they are (George Eliot)"
            }
            description={`Alexandra park is cut in half by a “peace wall”, the gate to which is closed every night. Starting on one side and ending on the other, I embroidered this the day Trump…`}
            img={AlexandraPark}
            projectLink={`/brexit/alexandra-park`}
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
