import React from "react";
import BrexitProjectPage from "../../components/BrexitProjectPage";

const WhiteCliffs = () => {
  return (
    <>
      <BrexitProjectPage
        title={`White Cliffs of Dover`}
        bgName={`bg-whiteCliffsOfDover`}
        bgPosition={"bg-center"}
        tagline={`
White Cliffs of Dover
(A traveller) weary toil subdued, I reached a country strange and rude (Matilda Betton)`}
        secondLine={`“You’ve got a swarm of people coming across the Mediterranean, seeking a better life, wanting to come to Britain” (David Cameron).`}
        text={`The rest of this quote (which I didnt have time to embroider) is “and trembled, lest, approaching eve, my thoughts of shelter should decieve”. I think it captures the vulnerability of the traveller, not just in the past, but today. Dover is a political symbol in our national consciousness.A place Vera Lynne imagined returning to. Where the lighthousekeeper showed me the busiest shipping lanes in the world. Where the lorries lined up at customs might contain a weary, trembling cargo. Where I enjoyed a cream tea as I watched the ferries come in. Not because I was hungry, just because I could.`}
      />
    </>
  );
};

export default WhiteCliffs;
