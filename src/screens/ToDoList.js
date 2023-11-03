import Navbar from "../components/Navbar";
import Details from "../components/Details";
import pic from "../pictures/Projets/to-do-list.png";
const ToDoList = () => {
  return (
    <>
      <Navbar />
      <Details
        name="To do list"
        desc="Exercice javascript d'une to do list"
        people="1"
        responsive="Pc"
        url="https://terevam.github.io/To_Do_List/"
        languages={["Javascript"]}
        apis={[]}
        others={[]}
        pics={[pic]}
      />
    </>
  );
};

export default ToDoList;
