import React from "react";
import BrexitProjectPage from "../../components/BrexitProjectPage";

const BritishCamp = () => {
  return (
    <>
      <BrexitProjectPage
        title={`British Camp, Malvern`}
        bgName={`bg-britishCamp`}
        bgPosition={"bg-center"}
        tagline={`In this sea fenced isle survey scenes to make the sick heart shudder. (Charlotte Smith)`}
        secondLine={`“Land of Hope and Glory. Mother of the Free. How shall we extoll thee. Who are born of thee?”`}
        text={`Elgar, the composer of “Pomp and Circumstance” (from which this famous lyric is taken) was born nearby.`}
      />
    </>
  );
};

export default BritishCamp;
