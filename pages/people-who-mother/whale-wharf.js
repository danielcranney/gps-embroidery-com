import React from "react";
import PeopleProjectPage from "../../components/PeopleProjectPage";

const VictoriaPark = () => {
  return (
    <>
      <PeopleProjectPage
        title={`Whale Wharf, Littleton on Severn`}
        bgName={`bg-whaleWharf`}
        bgPosition={"bg-center"}
        tagline={`We walk on the bed of the sea of the air (JR Carpenter)`}
        secondLine={`“Which way is west? How slow is a curve? How many paces are there in your name? How fast is a line? What is traceable from above? What is left to be seen?” (Mary Paterson).`}
        text={`I worked with writer Mary Paterson, digital artist JR Carpenter and cinematographer Adam Laity. On the river Severn, we explored the layers of geological preservation in the earth, but also the comparable “depth” of the clouds above.`}
      />
    </>
  );
};

export default VictoriaPark;
