import React from "react";
import "../css/p9.css";
import Logo from "../images/descarga.png";
import Eye from "../images/eye.png";

function Editar () {
  return (
    <>
       <header>
        <div className="container">
          <div>
            <img className="img" src={Logo} />
          </div>
          <nav>
            <a></a>
            <a className="text"></a>
          </nav>
        </div>
      </header>
      <body>
      
      <div id="div1" align="center" className="div2">
      <table border="1">
      <tr>
      <td className="td1">11</td>
      <td className="td1" >1</td>
     <td className="td1"> <button className="botonimg"><img className="img2" src={Eye} /></button></td>
      </tr>
      <tr>
      <td className="td1">11</td>
      <td className="td1">2</td>
     <td className="td1"> <button className="botonimg"><img className="img2" src={Eye} /></button></td>
      </tr>  
      <tr>
      <td className="td1">10</td>
      <td  className="td1">1</td>
     <td className="td1"> <button className="botonimg"><img className="img2" src={Eye} /></button> </td>
      </tr>
      <tr>
      <td className="td1">10</td>
      <td className="td1">2</td>
     <td className="td1"> <button className="botonimg"><img className="img2" src={Eye} /></button> </td>
      </tr>

      <tr>
      <td className="td1">10</td>
      <td className="td1">3</td>
     <td className="td1"> <button className="botonimg"><img className="img2" src={Eye} /></button> </td>
      </tr>

      <tr>
      <td className="td1">9</td>
      <td className="td1">1</td>
     <td className="td1"> <button className="botonimg"><img className="img2" src={Eye} /></button> </td>
      </tr>

      <tr>
      <td className="td1">9</td>
      <td className="td1">2</td>
     <td className="td1"><button className="botonimg"><img className="img2" src={Eye} /></button> </td>
      </tr>

      <tr>
      <td className="td1">9</td>
      <td className="td1">3</td>
     <td className="td1"> <button className="botonimg"><img className="img2" src={Eye} /></button> </td>
      </tr>
      </table>
     


      </div>





      </body>
    </>
  );
  }
  
export default Editar;