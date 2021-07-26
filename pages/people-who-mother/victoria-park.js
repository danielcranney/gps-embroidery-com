import React from "react";
import PeopleProjectPage from "../../components/PeopleProjectPage";

const VictoriaPark = () => {
  return (
    <>
      <PeopleProjectPage
        title={`Victoria Park, Gloucester`}
        bgName={`bg-victoriaPark`}
        bgPosition={"bg-left-top"}
        tagline={`Sexy Lady (Katrina)`}
        secondLine={`“Not so much a person so much as a place, a supportive texture for other people’s lives” (Griselda Pollock).`}
        text={`At Gloucester Library I worked with mothers whose children have additional needs. They wanted to talk about sex, and wrote the kinds of words you sometimes see on a toilet wall. It was a good laugh, but this is the only one I could share.`}
      />
    </>
  );
};

export default VictoriaPark;
