import "./Projets.css";
import {Link} from "react-router-dom";
function Projets() {
  return (
    <section>
      <h2>Mes projets</h2>
      <ul>
        <li>
          <Link to="/openairconnect">OpenAirConnect</Link>
        </li>
        <li></li>
        <li></li>
        <li>
          <h2>OpenAirConnect</h2>
        </li>
        <li>
          <h2>Galerie Photo</h2>
        </li>
        <li>
          <h2>To do list</h2>
        </li>
        <li>
          <h2>OpenAirConnect</h2>
        </li>
        <li>
          <h2>Galerie Photo</h2>
        </li>
        <li>
          <h2>To do list</h2>
        </li>
      </ul>
    </section>
  );
}

export default Projets;
