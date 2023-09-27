import React from "react";
import B_serv from "../b_servicio";
import Header from "../header.js";
import Footer from "../b_footer";

function servicio(){
    return(
    <div>
<Header
titulo="Manzanas de Cuidado"
inicio="Inicio"
admin="Iniciar Sesion"
cuidadoras="Sobre nosotros"
sobre="Servicios"
/>
<B_serv
titulo="SERVICIOS"
descr="Somos espacios de la ciudad en los que brindamos  tiempo de calidad a
las mujeres y a sus familias, donde pueden estudiar, aprender, ejercitarse entre muchas otras actividades, todos los servicios son totalmente gratuitos¡QUE ESPERAS PARA SER PARTE DE NOSOTROS!"
ser1="ASESORIA JURIDICA"
ser2="LAVANDERIA COMUNITARIA "
ser3="ASESORIA PSICOLOGICA"
ser4="EMPRENDER"/>
<Footer
tel="Telefono"
ubi="Ubicacion"
hora="Horarios"
tel1="3220541865
(061)9295426"
ubi1="Calle 105 ·20-42- San Carlos"
hora1="Lunes-Viernes 8:00am - 7:00pm"
/>

</div>
    )   
}
export default servicio