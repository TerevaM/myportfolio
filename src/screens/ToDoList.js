import Navbar from "../components/Navbar";
import Details from "../components/Details";
import pic from "../pictures/Projets/to-do-list.png";
const ToDoList = () => {
  return (
    <>
      <Navbar />
      <Details
        name="Green Drive"
        desc="GreenDrive est un projet style Airbnb de location de voiture."
        people="4"
        responsive="Mobile, Pc"
        url=""
        languages={["Ruby on rails"]}
        apis={[]}
        others={["flatpickr", "devise"]}
        pics={[pic]}
      />
    </>
  );
};

export default ToDoList;
