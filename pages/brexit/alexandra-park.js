import React from "react";
import BrexitProjectPage from "../../components/BrexitProjectPage";

const AlexandraPark = () => {
  return (
    <>
      <BrexitProjectPage
        title={`Alexandra Park, Belfast`}
        bgName={`bg-alexandraPark`}
        bgPosition={"bg-center"}
        tagline={`People are almost always better than their neighbours think they are (George Eliot)`}
        secondLine={`“I will build a great, great wall on our southern border, and I will have Mexico pay for that wall” (Donald Trump, US Election campaign statement)`}
        text={`Alexandra park is cut in half by a “peace wall”, the gate to which is closed every night. Starting on one side and ending on the other, I embroidered this the day Trump was elected.`}
      />
    </>
  );
};

export default AlexandraPark;
