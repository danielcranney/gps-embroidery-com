import React from "react";
import PeopleProjectPage from "../../components/PeopleProjectPage";

const CamPeakView = () => {
  return (
    <>
      <PeopleProjectPage
        title={`Cam Peak View, Dursley`}
        bgName={`camPeakView`}
        bgPosition={"right-top"}
        tagline={`Moon (Chloe)`}
        secondLine={`“Dear Babe, that sleepest cradled by my side, Whose gentle breathings, heard in this deep calm, Fill up the intersperséd vacancies And momentary pauses of the thought!” (Samuel Taylor Coleridge, Frost at Midnight).`}
        text={`Mothers at Dursley Library wanted to find a way to create alongside their children. I like the sense of going round in circles of this embroidery. It speaks to me more than other, more ethereal ideas about motherhood.`}
      />
    </>
  );
};

export default CamPeakView;
