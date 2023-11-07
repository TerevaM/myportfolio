import Details from '../components/Details';
import Navbar from "../components/Navbar";

const Calculatrice = () => {
  return (
    <>
    <Navbar />
    <Details
     name="Calculatrice"
     desc="calculatrice simpliste"
     people="1"
     url="https://terevam.github.io/calculatrice/"
     responsive="Mobile, Pc"
     languages={["Svelt JS"]}
     apis={[]}
     others={[]}
     pics={[]}
   />
    </>
  )
};

export default Calculatrice;
