import React from "react";
import BrexitProjectPage from "../../components/BrexitProjectPage";

const BarnardCastle = () => {
  return (
    <>
      <BrexitProjectPage
        title={`Barnard Castle, County Durham`}
        bgName={`bg-barnardCastle`}
        bgPosition={"bg-center"}
        tagline={`The fiend of discord sits in savage triumph (mocking every plea of policy and justice) (Charlotte Smith)`}
        secondLine={`“I follow him to serve my turn upon him” Iago (Othello, 1:1)`}
        text={`In summer 2020, having checked my eyesight, I made a trip to Barnard Castle. The newspaper headlines were full of political infighting, the town was busy and chaotic and there was lots of tutting about social distancing and the right way to queue. I was glad to get out on the moor where there was nobody to disagree with.`}
      />
    </>
  );
};

export default BarnardCastle;
