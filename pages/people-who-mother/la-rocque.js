import React from "react";
import PeopleProjectPage from "../../components/PeopleProjectPage";

const LaRocque = () => {
  return (
    <>
      <PeopleProjectPage
        title={`La Rocque`}
        bgName={`bg-laRocque`}
        bgPosition={"bg-left-bottom"}
        tagline={`La Mer Est La Mere (Sarah Dufayard)`}
        secondLine={`“We won’t play Nature to your Culture” (Barbara Kruger).`}
        text={`I ran a DIY Artist residency with Live Art Development Agency in Sept 2017. Jersey’s relationship to the UK mainland brought up analogies to the UK’s relationship with continental Europe. Our work explored and challenged the politics of ‘mother’ as landscape and nation. Jersey doubles in size when the tides are out. Where, then, are it’s borders?`}
      />
    </>
  );
};

export default LaRocque;
