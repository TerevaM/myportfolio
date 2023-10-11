import "./Presentation.css";
import logo from "../../services/pictures/images.png";
import badminthon from "../../services/pictures/Presentation/badminthon.png";
import jeux from "../../services/pictures/Presentation/manette-rouge.webp";
import echecs from "../../services/pictures/Presentation/echecs.png";
function Intro() {
  //state

  //comportement

  //render

  return (
    <section>
      <h2>Qui suis-je ?</h2>
      <div id="pres">
        <img src={logo} alt="Logo" />
        <p>
          Bienvenue, je suis un développeur web junior passionné par la création
          d'applications web conviviales et innovantes. Je maîtrise les langages
          HTML, CSS et JavaScript, et je suis toujours enthousiaste à l'idée
          d'apprendre de nouvelles technologies. Mon objectif est de contribuer
          à des projets web tout en développant mes compétences techniques. Je
          suis également soucieux de la qualité du code et de l'expérience
          utilisateur. Je recherche des opportunités d'apprentissage et de
          croissance au sein d'une équipe de développement web dynamique.
        </p>
      </div>
      <h3>Mes centres d'interets</h3>
      <div id="centre_interets">
        <img src={badminthon} alt="badminthon" id="bad"/>
        <img src={jeux} alt="jeux" />
        <img src={echecs} alt="echecs" />
      </div>
    </section>
  );
}

export default Intro;
