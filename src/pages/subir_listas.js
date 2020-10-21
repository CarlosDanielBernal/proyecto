import React from "react";
import "../css/p5.css";
import Logo from "../images/descarga.png";
import Flecha from "../images/flecha2.png"

function Subir() {
  return (
    <>
      <header>
        <div className="container">
          <div>
            <img className="img" src={Logo} />
          </div>
          <nav>
            
          </nav>
        </div>
      </header>
      <body>
        <div className="cuerpo">
          <a className="Boton" href="">
            Subir_listas
          </a>
          <div className="cuerpo">
          <a className="Boton" href="">
          ver_y_editar_listas
          </a>
          <div>
            <img className="img_f" href="#" src={Flecha} />
          </div>
        <div class="fondo">
          
        </div>

        </div>
        
        </div>
      </body>
    </>
  );
}

export default Subir;


