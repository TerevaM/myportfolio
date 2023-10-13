import "./Projets.css";
import {Link} from "react-router-dom";
function Projets() {
  return (
    <section>
      <h2>Mes projets</h2>
      <ul>
        <li id="open_air_connect">
          <Link to="https://www.openairconnect.com/" target="_blank">
            <h3>OpenAirConnect</h3>
          </Link>
        </li>
        <li id="galerie_photo">
          <Link to="/galeriephoto">
            <h3>Galerie Photo</h3>
          </Link>
        </li>
        <li id="to_do_list">
          <Link to="https://terevam.github.io/To_Do_List/" target="_blank">
            <h3>To do List</h3>
          </Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}

export default Projets;
