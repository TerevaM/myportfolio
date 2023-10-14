import "./Projets.css";
import Card from "./Card";
function Projets() {
  return (
    <section>
      <h2 id="projects">Mes projets</h2>
      <ul>
        <Card
          id="open_air_connect"
          link="/openairconnect"
          name="Open Air Connect"
        />
        <Card
          id="green_drive"
          link="/greendrive"
          name="Green Drive"
        />
        <Card id="galerie_photo" link="/galeriephoto" name="Galerie Photo" />
        <Card
          id="to_do_list"
          link="https://terevam.github.io/To_Do_List/"
          target="_blank"
          name="To Do List"
        />
        <Card
          id="location_car"
          link="https://terevam.github.io/Location_Car/"
          target="_blank"
          name="Location Car"
        />
      </ul>
    </section>
  );
}

export default Projets;
