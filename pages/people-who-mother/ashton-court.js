import React from "react";
import PeopleProjectPage from "../../components/PeopleProjectPage";

const AshtonCourt = () => {
  return (
    <>
      <PeopleProjectPage
        title={`Ashton Court`}
        bgName={`ashtonCourt`}
        bgPosition={"right-top"}
        tagline={`Straighten up and fly right (Nat King Cole)`}
        secondLine={`“In her own quiet and proud way, this was one of mum’s life lessons to me” (Biddy O’Donnell).`}
        text={`A group of mothers from Bristol chose the area of Ashton Court where the music festival used to be held to embroider song lyrics. We chose songs we had sung as mothers, to our mothers, or which our mothers had sung to us.`}
      />
    </>
  );
};

export default AshtonCourt;
