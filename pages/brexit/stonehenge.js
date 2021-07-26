import React from "react";
import BrexitProjectPage from "../../components/BrexitProjectPage";

const Stonehenge = () => {
  return (
    <>
      <BrexitProjectPage
        title={`Stonehenge`}
        bgName={`stonehenge`}
        bgPosition={"right-bottom"}
        tagline={`I hail the law formed to serve the strong. In vain we argue rail and chide (Lucy Aitken)`}
        secondLine={`“She stood up, shook herself, and went forward, neither of the men having moved. “I am ready”, she said quietly” (Thomas Hardy, Tess of the D’Urbervilles).`}
        text={`Stonehenge is the location where single mother Tess Of The Durbervilles is arrested, for crimes which were forced on her by circumstance. As I walked this embroidery I was surprised at the level of fury I had on behalf of a fictional character, and at the connections I made between her and contemporary women. The monument is surrounded by army barracks, where I imagine wives of low-ranking officers sitting waiting in bleak homes while tanks roll out of the barbed wire no-go areas across the public road and disappear again into no mans land. Though it is not visible in the GPS trace, my walk was full of rage.`}
      />
    </>
  );
};

export default Stonehenge;
