import Details from '../components/Details';
import Navbar from "../components/Navbar";

const GaleriePhoto = () => {
  return (
    <>
    <Navbar />
    <Details
     name="Galerie Photo"
     desc="Projet d'une galerie photo en ligne."
     people="1"
     url=""
     responsive="Mobile, Pc"
     languages={["PHP natif", "Javascript"]}
     apis={[]}
     others={[]}
     pics={[]}
   />
    </>
  )
};

export default GaleriePhoto;
