import React from "react";
import "./estilos/Boton.css"
import img1 from "../imagenes/add.png"
import { Link } from "react-router-dom";

const B=()=>(//el to es a donde va
    <Link to="/new">
        
        <img src={img1} className="suma"/>
    </Link>
)
export default B