import React from "react";
import { Link } from "react-router-dom";
function inises(){
    return(
<div className="container"> 
        <div className="login">
            <h1>LOGIN</h1>
        <label className="ola3">Inserte su email:
     <input className="ola" placeholder="Ana" type="text" name="nombre" required/>
     </label>  
     <label className="ola3">Inserte su contraseña:
     <input className="ola" type="password" name="password" placeholder="********"required/>
     </label>  
     <Link to="/mujh.js"><button  className="ola2">Ingresar</button></Link>
     </div>
     <div>
    

    

     
     
     </div>
    </div>
     
  

   
    )}
    export default inises