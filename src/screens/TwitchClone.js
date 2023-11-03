import Details from "../components/Details";
import Navbar from "../components/Navbar";
import pic from "../pictures/Projets/twitchclone.png";

const TwitchClone = () => {
  return (
    <>
      <Navbar />
      <Details
        name="Twitch Clone"
        desc="Projet NextJS reproduction d'une page d'accueil twitch côté front"
        people="1"
        url="https://terevam.github.io/twitch-clone/"
        responsive="Mobile, Tablette, Pc"
        languages={["NextJS", "React"]}
        apis={[]}
        others={["GitHub Pages"]}
        pics={[pic]}
      />
    </>
  );
};

export default TwitchClone;
