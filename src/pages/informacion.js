import React from "react";
import Log from "../images/flecha2.png";
import "../css/styles_p12.css"
import Fondo from  "../images/img.png"
function Informacion() {
  return ( 
<div style={{background: `url(${Fondo})`}} > 
 
<div> <h1>Contacto de los creadores </h1> </div>

<div>
   <h2>jhosept Camilo Ramirez </h2>
   <h2>Twitter: IESEJhosept Ramirez </h2>
   <h2>Facebook:JCamilo Ramirez </h2>
   <h2>Correo: thegamerhd4k@gmail.com </h2>
   </div>
  

<div> 
<h2>Carlos Daniel Bernal  </h2>
<h2>carlos 2220576@gmail.com</h2>
</div>

<div> 
<h2>Juan Pablo Holguín  </h2>
<h2> Holgincorreaj27@gmail.com </h2>
</div>


<button className="Botonimg">  <img className="img2" src={Log} /></button>



</div>

)}

export default Informacion ;

  