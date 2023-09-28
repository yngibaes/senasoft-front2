import React from "react";
import { Link } from "react-router-dom";
function regis(){
    return(
<div className="container"> 

     <h1>REGISTRO</h1>
        <label className="ola3" >Nombre:
     <input className="ola" placeholder="Nata" type="text" name="nombre" required/>
     </label>  
     <label className="ola3" >Apellido:
     <input  className="ola"placeholder="Ramos" type="text" name="apellido" required/>
     </label> 
     <label className="ola3" >Tipo de documento
     <select  className="ola" name="Tipo">      
  <option  className="ola">T.I</option>
  <option selected>C.C</option>
  <option >Cedula extranjera</option>
  <option >Pasaporte</option>
  </select>
  <label className="ola3" >Documento
     <input className="ola" placeholder="1020351642" type="number" name="Docu" required/>
     </label> 
     <label className="ola3" >Telefono:
     <input className="ola" placeholder="3152064201" type="number" name="Tel" required/>
     </label> 
     <label className="ola3" >direccion:
     <input  className="ola" placeholder="Calle 10 ·20-45a" type="text" name="direc" required/>
     </label> 
     <label className="ola3" >Ciudad:
     <input  className="ola" placeholder="Medellin" type="text" name="Ciudad" required/>
     </label> 
     <label className="ola3" >Ocupacion:
     <input  className="ola" placeholder="Profesora" type="text" name="ocupa" required/>
     </label> 
     <label className="ola3" >¿En que servicio te gustaria participar?:
     <textarea  className="ola"  name="comment" >Escribe algo</textarea>
     </label> 
     <Link to="/inises"><button className="ola2">Enviar</button></Link>

    

     
     </label> 
     </div>
   
     
  

   
    )}
    export default regis