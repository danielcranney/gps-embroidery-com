import React from "react";
import PeopleProjectPage from "../../components/PeopleProjectPage";

const GroznezPoint = () => {
  return (
    <>
      <PeopleProjectPage
        title={`Groznez Point`}
        bgName={`groznezPoint`}
        bgPosition={"center"}
        tagline={`Sigh Of All The Seas (Emily Bronte/Callie Nestleroth)`}
        secondLine={`“I wish I were a girl again, half-savage and hardy, and free” (Cathy, Wuthering Heights).`}
        text={`Northern Jersey is wild and windswept, and we embroidered our words across heather and gorseland. The process of GPS embroidery involves walking which appears directionless, like the tragic heroine in the Romantic landscape. It is also restrictive, as the writer is not free to wander, but needs to conform to the shape of her letters. This is not a coincidence.`}
      />
    </>
  );
};

export default GroznezPoint;
