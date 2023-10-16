import { Link } from "react-router-dom";
import "./Details.css";
// import backgroundvideo from "../videos/openairconnect.mp4";
function Details(props) {
  const showVisitLink = props.url !== "" ? true : false;
  return (
    <>
      <h1>{props.name}</h1>
      {showVisitLink && (
        <h5>
          <Link to={props.url} target="_blank" id="visit_link">
            Visiter le site
          </Link>
        </h5>
      )}
      <div>
        <h4>Statistiques du projet</h4>
        <ul id="stats">
          <li>Personnes sur le projet : {props.people}</li>
          <li>Type d'application : {props.responsive}</li>
        </ul>
      </div>
      <div>
        <h4>Descriptif du projet</h4>
        <p>{props.desc}</p>
      </div>
      <div>
        <h4>Technologies utilisées</h4>
        <ul id="techno_uses">
          {props.languages.map((language) => (
            <li key={language} className="cellules language">
              {language}
            </li>
          ))}
          {props.apis.map((api) => (
            <li key={api} className="cellules api">
              {api}
            </li>
          ))}
          {props.others.map((other) => (
            <li key={other} className="cellules default">
              {other}
            </li>
          ))}
        </ul>
      </div>
      <ul id="pics">
        {props.pics.map((pic) => (
          <li>
            <img src={pic} alt={pic}/>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Details;
