import React from "react";
import Header from "../header.js";
import B_contac from "../b_contact.js";
import Footer1 from "./footer1.js";
function Contacto(){
    return(
    <div>
<Header
titulo="Manzanas de Cuidado"
inicio="Inicio"
admin="Iniciar Sesion"
cuidadoras="Sobre nosotros"
sobre="Servicios"
/>
<B_contac
titulo="SOBRE NOSOTROS"
contac1="Estamos ubicados en 10 municipios"
contac2="Hemos trabajado por 12 años"
contac3="Contamos con 108 clientes"
contac4="Contamos con 30 manzanas "
/>
<Footer1
tel="Telefono"
hora="Horarios"
tel1="3220541865
(061)9295426"
ubi1="Calle 105 ·20-42- San Carlos"
hora1="Lunes-Viernes 8:00am - 7:00pm"
/>

</div>
    )   
}
export default Contacto