import "./Projets.css";
import {Link} from "react-router-dom";
function Projets() {
  return (
    <section>
      <h2>Mes projets</h2>
      <ul>
        <li>
          <Link to="https://www.openairconnect.com/" target="_blank">
            <h3>OpenAirConnect</h3>
          </Link>
        </li>
        <li>
          <Link to="/galeriephoto">
            <h3>Galerie Photo</h3>
          </Link>
        </li>
        <li>
          <Link to="/todolist">
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
