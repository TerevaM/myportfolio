import Navbar from "../components/Navbar";
import Details from "../components/Details";
import pic from "../pictures/Projets/location_car.png";
const LocationCar = () => {
  return (
    <>
      <Navbar />
      <Details
        name="Location Car"
        desc="Exercice front end d'un site de location de voiture"
        people="4"
        responsive="Mobile, Pc"
        languages={["PHP"]}
        apis={[]}
        others={["flatpickr", "devise"]}
        pics={pic}
      />
    </>
  );
};

export default LocationCar;
