import Details from "../components/Details";
import Navbar from "../components/Navbar";
import pic from "../pictures/Projets/calculatrice.png";

const Calculatrice = () => {
  return (
    <>
      <Navbar />
      <Details
        name="Calculatrice"
        desc="calculatrice fonctionnel, enfin faut pas trop lui en demander"
        people="1"
        url="https://terevam.github.io/calculatrice/"
        responsive="Mobile, Pc"
        languages={["Svelte JS"]}
        apis={[]}
        others={[]}
        pics={[pic]}
      />
    </>
  );
};

export default Calculatrice;
