import React from "react";
import PeopleProjectPage from "../../components/PeopleProjectPage";

const UphillBeach = () => {
  return (
    <>
      <PeopleProjectPage
        title={`Uphill Beach, Weston Super Mare`}
        bgName={`uphillBeach`}
        bgPosition={"center"}
        tagline={`A child who is silent until learning to speak (Niall Farnan)`}
        secondLine={`“They fuck you up, your mum and dad. They do not mean to, but they do” (Philip Larkin).`}
        text={`A group of graduates from Bristol Institute for Performing Arts, all of whom mother, used the embroideries of other groups as stimulus and wrote about their own childhood memories of trips to Weston.`}
      />
    </>
  );
};

export default UphillBeach;
