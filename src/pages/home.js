import React from "react";
import "../css/styles.css";
import Logo  from "../images/descarga.png";
import Imagen from "../images/img1.jpg"
import Fondo from  "../images/img.png"
 

function  home(){
 return (
 <div className="home" style={{background: `url(${Fondo})`}}>
  
      <header>
        <div className="container">
          <div className="sub"> <img className="img" src={Logo} /></div>
          <nav className="nav1">
           <a className="tex14" href="#">Regístrese</a>
            <a className="tex14" href="#">Iniciar sesión</a>
            <a className="tex14" href="#">Contactos</a>
          </nav> </div>
        
      </header>

   <div className="img1" >
      <img src={Imagen} width ="300px"
height="270px" />
    </div>

 <div className="texto32">
      <h2>Corre que llegas tarde </h2>
      <h3>haz el tiempo mas eficiente </h3>
      
    </div>
    
 <a className="Boton31" href="">
      Registrate
    </a>
      
    </div>
  
 );
}


export default home ;