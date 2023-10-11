import './index.css'
import './scrollbar.css'
import React from "react";
import ReactDOM from "react-dom/client";

import Intro from "./scenes/Intro/Intro";
import Presentation from "./scenes/Presentation/Presentation"
import Projets from './scenes/Projets/Projets';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Intro />
    {/* <Presentation /> */}
    <Projets />
  </>
);