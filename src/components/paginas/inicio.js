import React from "react";
import Header from "../header.js";
import B_inicio from "../b_inicio.js";
import Footer1 from "./footer1.js";
function Inicio(){
    return(
    <div>
<Header
titulo="Manzanas de Cuidado"
inicio="Inicio"
admin="Iniciar Sesion"
cuidadoras="Sobre Nosotros "
sobre="Servicios"
/>
<B_inicio/>
<Footer1/>

</div>
    )   
}
export default Inicio