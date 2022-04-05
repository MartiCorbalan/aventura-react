import "./App.css";
import "./style.css";
import Historia from "./components/Historia";

import Pagina from "./components/Pagina";

import Botons from "./components/Botons";

import { useState } from "react";
function App() {
  return (
    <div className="App">
      <h1>Benvingut a la teva aventura, llegeix i disfruta!</h1>

      <div className="aventura">
        {" "}
        <br />
        <div className="pagina">
          <p>Pàgina</p>
          <div>
            <Pagina />
          </div>
        </div>
        <br />
        <div className="general">
          <div className="historia">
            <Historia />
          </div>
          {/*  <div className="tot">
             <Usuari />
            <Cami /> 
          </div> */}
        </div>
        <div className="btn_numeros">
          <div className="sino">
            <br />
            <Botons value={"SI"} />
            <Botons value={"NO"} />
          </div>

          <div className="other_btn">
            <br />
            <Botons value={"Tornar a jugar"} />
            <Botons value={"Sortir"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
