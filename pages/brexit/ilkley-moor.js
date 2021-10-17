import React from "react";
import BrexitProjectPage from "../../components/BrexitProjectPage";

const IlkleyMoor = () => {
  return (
    <>
      <BrexitProjectPage
        title={`Ilkley Moor, overlooking Bradford`}
        bgName={`bg-ilkleyMoor`}
        bgPosition={"bg-bottom"}
        tagline={`It is impossible to degrade our companion without degrading our self. Lucy Aitken.`}
        secondLine={`“Was it economic deprivation and disenfranchisement that led the city to choose Leave? And what role did the unusually high levels of immigration here play?” New Statesman, 15th of August 2016.`}
        text={`“On Ilkley Moor bah tat” means “On Ilkley Moor without a hat”. Whenever I’ve heard the song it’s sung as a stereotype of the Stoic Northerner. Perhaps that’s because I live in the south. As I hummed the tune as I walked I thought about how we don’t have to be all that different to find it difficult to understand each other.`}
      />
    </>
  );
};

export default IlkleyMoor;
