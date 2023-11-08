import "./Projets.css";
import Card from "./Card";
function Projets() {
  return (
    <section>
      <h2 id="projects">Mes projets</h2>
      <ul>
        <Card id="calculatrice" link="calculatrice" name="Calculatrice" mainlang="SvelteJS"/>
        <Card id="twitch-clone" link="twitch-clone" name="Twitch Clone" mainlang="NextJS"/>
        <Card id="open_air_connect" link="openairconnect" name="Open Air Connect" mainlang="RubyOnRails" />
        <Card id="green_drive" link="greendrive" name="Green Drive" mainlang="RubyOnRails"/>
        <Card id="to_do_list" link="todolist" name="To Do List" mainlang="JS"/>
        <Card id="location_car" link="locationcar" name="Location Car" mainlang="PHP"/>
      </ul>
    </section>
  );
}

export default Projets;
