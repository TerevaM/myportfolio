import "./Details.css";
import Navbar from "./Navbar";
import backgroundvideo from "../videos/openairconnect.mp4";
function Details(props) {
  return (
    <>
      <Navbar />
      <h1>{props.project_name}</h1>
      {/* <video autoPlay loop muted id="video">
        <source src={backgroundvideo} type="video/mp4"/>
      </video> */}
    </>
  );
}

export default Details;
