import React from "react";
import "../css/syles_p5.css";
import Logo from "../images/descarga.png";
import Fondo from  "../images/img.png"
import Campana4 from "../images/campana4.png";
import Puerta from "../images/puerta.png";
function Coordinador () {
 return (
    <>
    <div className="div12"  style={{background: `url(${Fondo})`}}>
      <header>
        <div className="container">
          <div>
            <img className="img" src={Logo} />
          </div>
          <nav>
            <a></a>
            <a className="text1">Coordinador</a>
          </nav>
        </div>
      </header>
      
      <div className="cuerpo">
      
         <button href="#" className="Boton27"> <img className="campana" src={Campana4}/>  Notificación  </button>
         <br/>  <br/>
          <button href="#" className="Boton27" >  Subir listas  </button>
          <br/>
        <button href="#" className="Boton25" >  Faltas acomuladas  </button>           
        <br/>
<button href="#" className="Boton26" > <img className="campana" src={Puerta}/> Salir </button>
      
        </div>
     
     </div>
    </>
  );
}

export default Coordinador;
