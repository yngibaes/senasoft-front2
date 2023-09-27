import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Inicio from "./components/paginas/inicio.js";
import FORM from "./components/formulario.js";
import servicio from "./components/paginas/Serv.js";
import Contacto from "./components/paginas/contac.js";
import Login from "./components/paginas/login.js";
//Pasando a JS mas moderno
const App=()=>(//No se necesita el return
  
    <BrowserRouter>
    <Routes>
      {/* Exat es para dar precision de cual 
      se puede crear uno si no se encuentra la pagina
       */}
         <Route path="/contac" Component={Contacto}/>
   <Route path="/Serv" Component={servicio}/>
    <Route path="/inicio" Component={Inicio}/>
    <Route path="/formulario" Component={FORM}/>
    <Route path="/login" Component={Login}/>
    
    </Routes>
    </BrowserRouter>  
);
/*
function App(){
    return(
      <BrowserRouter>
      <Routes>
        {/* Exat es para dar precision de cual 
        se puede crear uno si no se encuentra la pagina
         }
      <Route exact path="/ejemplo" Component={Ejemplo}/>
      <Route path="/new" Component={New}/>
      
      </Routes>
      </BrowserRouter>  
    )
}
*/
export default App