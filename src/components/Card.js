import "./Card.css";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <li id={props.id} class="card">
      <Link to={props.link} target={props.target}>
        <h3>{props.name}</h3>
        <span id={props.mainlang} className="mainlang">{props.mainlang}</span>
      </Link>
    </li>
  );
}

export default Card;
