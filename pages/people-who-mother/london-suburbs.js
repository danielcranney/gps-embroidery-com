import React from "react";
import PeopleProjectPage from "../../components/PeopleProjectPage";

const LondonSuburbs = () => {
  return (
    <>
      <PeopleProjectPage
        title={`London Suburbs`}
        bgName={`bg-londonSuburbs`}
        bgPosition={"bg-center"}
        tagline={`Walk with my head (think with my feet) (Sarah Dufayard)`}
        secondLine={`“I like walking because it is slow, and I suspect that the mind, like the feet, works at about three miles an hour. If this is so, then modern life is moving faster than the speed of thought or thoughtfulness” (Rebecca Solnit).`}
        text={`Sarah and I met on the LADA DIY residency I ran in Jersey, but she took a GPS tracker back to London to embroider some more. She described this sentence as a reflection on the practice of GPS Embroidery; though like so many of my own, it is unfinished. There is never time to say everything we want to.`}
      />
    </>
  );
};

export default LondonSuburbs;
