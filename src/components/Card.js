import "./Card.css";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <li id={props.id} class="card">
      <Link to={props.link} target={props.target}>
        <h3>{props.name}</h3>
      </Link>
    </li>
  );
}

export default Card;
