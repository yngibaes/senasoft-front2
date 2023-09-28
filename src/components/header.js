import React from "react";
import "./estilo/header.css"
import img from "./estilo/img/logo.png"
import { Link } from "react-router-dom";
import { IconUserSquareRounded } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';
import { IconSettingsSearch } from '@tabler/icons-react';
import { IconHearts } from '@tabler/icons-react';



const Header=(props)=>( //CREAME UNA CONST PARA PODER ALMACENAR DATOS// 
<div className="container"> 
        <div className="header">
        <h1> Manzanas de cuidado</h1>
        <img  src={img}  height={150}  width={150} className="img" alt="ola"/> 
        <ul className="header_ul">
            
            <Link className="Header_tit" to="/inicio"><li> <span><IconHome/></span> {props.inicio} </li></Link>
            <Link className="Header_tit" to="/Serv"><li> <span><IconSettingsSearch/></span>{props.sobre}  </li></Link>
            <Link className="Header_tit" to="/contac"><li ><span><IconHearts/></span> {props.cuidadoras}</li></Link>
            <Link className="boton1" to="/inises"> <button className="boton"><span><IconUserSquareRounded/></span>  {props.admin} </button> </Link>
            <Link className="boton1" to="/regis"> <button className="boton"><span><IconUserSquareRounded/></span>  {props.admin2} </button> </Link>
        </ul> 
        </div>
    </div>
)

export default Header