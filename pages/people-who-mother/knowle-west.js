import React from "react";
import PeopleProjectPage from "../../components/PeopleProjectPage";

const KnowleWest = () => {
  return (
    <>
      <PeopleProjectPage
        title={`Knowle West`}
        bgName={`knowleWest`}
        bgPosition={"right-bottom"}
        tagline={`Truth (Kayley, Hayley, Becky)`}
        secondLine={`“We see the truth in data” (Kayley, Hayley, Becky).`}
        text={`Young mothers from Knowle West took part in a year long project about data, during which they got savvy about the way their online information is used. They used their embroideries to represent their values, and to talk back to the surveillance which captures it.`}
      />
    </>
  );
};

export default KnowleWest;
