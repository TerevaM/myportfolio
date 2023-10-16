import Navbar from "../components/Navbar";
import Details from "../components/Details";
import pic from "../pictures/Projets/green_drive.png";
import pic2 from "../pictures/Projets/greendrive/greendrive2.png";
import pic3 from "../pictures/Projets/greendrive/greendrive3.png";
import pic4 from "../pictures/Projets/greendrive/greendrive4.png";

const GreenDrive = () => {
  return (
    <>
      <Navbar />
      <Details
        name="Green Drive"
        desc="GreenDrive est un projet style Airbnb de location de voiture."
        people="4"
        url=""
        responsive="Mobile, Pc"
        languages={["Ruby on rails"]}
        apis={[]}
        others={["flatpickr", "devise"]}
        pics={[pic, pic2, pic3, pic4]}
      />
    </>
  );
};

export default GreenDrive;
