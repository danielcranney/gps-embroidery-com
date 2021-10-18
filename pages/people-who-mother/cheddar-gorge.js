import React from "react";
import PeopleProjectPage from "../../components/PeopleProjectPage";

const CheddarGorge = () => {
  return (
    <>
      <PeopleProjectPage
        title={`Cheddar Gorge, Somerset`}
        bgName={`bg-cheddarGorge`}
        bgPosition={"bg-bottom"}
        tagline={`Armenian girls are kept closer to home (Silva Semerciyan)`}
        secondLine={`You’re so far away, doesn’t anybody stay in one place any more? (Carole King)`}
        text={`I wrote this with Armenian American playwright Silva Semerciyan in April 2021, as we came out of lockdown. Our conversations meandered between fleeing a genocide, escaping childcare duties to roam free in the landscape, and the acute awareness of distance between ourselves and our own parents during a time when it is not easy to get home, even when we want to.`}
      />
    </>
  );
};

export default CheddarGorge;
