import Navbar from "../components/Navbar";
import "../components/Details.css";
import Details from "../components/Details";
import pic from "../pictures/Projets/openairconnect.png";

const OpenAirConnect = () => {
  return (
    <>
      <Navbar />
      <Details
        name="Open Air Connect"
        desc="OpenAirConnect est un projet permettant de faciliter les organisations
          pour effectué des randonnées à plusieurs."
        people="4"
        responsive="Mobile"
        url="https://www.openairconnect.com/"
        languages={["Ruby on rails", "Stimulus JS"]}
        apis={["Strava API", "OpenWeather API"]}
        others={["WebSocket - Redis Cloud"]}
        pics={[pic]}
      />
    </>
  );
};

export default OpenAirConnect;
