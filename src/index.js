import "./index.css";
import "./scrollbar.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
// import GaleriePhoto from "./screens/GaleriePhoto";
import OpenAirConnect from "./screens/OpenAirConnect";
import GreenDrive from "./screens/GreenDrive";
import ToDoList from "./screens/ToDoList";
import LocationCar from "./screens/LocationCar";
import TwitchClone from "./screens/TwitchClone";
import Calculatrice from "./screens/Calculatrice";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/galeriephoto" element={<GaleriePhoto />} /> */}
        <Route path="/twitch-clone" element={<TwitchClone />} />
        <Route path="/calculatrice" element={<Calculatrice />} />
        <Route path="/openairconnect" element={<OpenAirConnect />} />
        <Route path="/greendrive" element={<GreenDrive />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/locationcar" element={<LocationCar />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
