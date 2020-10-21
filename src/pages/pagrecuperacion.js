import React from "react";
import Logo from "../images/descarga.png";
import "../css/styles_p7.css";
import Fondo from "../images/img.png";
function Recuperar() {
  return ( 
<div className="div200" style={{background: `url(${Fondo})`}}>
<div className="heder1" >
    <header>
        <div className="container">
          <div>
            <img className="img" src={Logo} />
          </div>
          <nav>
            <a></a>
            
          </nav>
        </div>
      </header>

      <div className="form">
      <h2 className="titulo_2">Recuperar contraseña </h2>

      <label For="Email"> </label>
        <input name="Email" id="correo" type="Email" placeholder="Email:" />
<br/>  <br/>
        <label For="contraseña"> </label>
       <input name="contraseña" id="contraseña" type="password" placeholder="Contraseña:" />
<br/> <br/>
       <label For="confirmar_contraseña"> </label>
       <input name="confirmar_contraseña" id="confirmar_contraseña" type="password" placeholder="Confirmar contraseña:" />

       <a className="Boton6" type="large" href="">
            Cambiar contraseña
          </a>



</div>
</div>
</div>
  
  
  
  
  ) }








  export default Recuperar ;