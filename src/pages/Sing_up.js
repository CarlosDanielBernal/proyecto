import React from "react";
import "../css/styles_p3.css";
import Fondo from  "../images/img.png"

function Sing_up() {
  return (
<div className="sing_up" style={{background: `url(${Fondo})`}}>
    <div className="instruccion"  >
      <h1 className="Titulo_login">Inicio de sesión </h1>

      <form className="campo">
        <label For="correo"> </label>
        <input name="correo" id="correo" type="Email" placeholder="Email:" />
        <br /> <br/>

        <label For="clave"> </label>
        <input
          name="clave"
          id="clave"
          type="password"
          placeholder="Contraseña:"
        />
        <br /> <br/>

        <label For="seleccione"> </label>
        <select className="lista" name="seleccione" id="seleccione" type="text">
          <br /> <br/>

          <option value=""> </option>
          <option disabled="selecione rol"> seleccione rol </option>
          <option value="Cordinador (a)"> Coordinador (a) </option>
          <option value="Celador (a)"> Celador (a) </option>
        </select>

        <div>
          <a className="Boton3" type="large" href="">
            Iniciar sesión
          </a>
        </div>
      </form>
      <div>
        <a className="bboton1" type="text" href="">
          Registrate aquí
        </a>
      </div>

      <div>
        <a className="bboton" type="text" href="">
          Recuperar contraseña perdida
        </a>
      </div>
    </div>
    </div> 
  );
}

export default Sing_up;
