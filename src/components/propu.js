import React, { useState } from "react";
import "../components/estilo/img/propu.css"
import { Link } from "react-router-dom";

const Form = () => {
  const [localidad, setLocalidad] = useState("");
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [documento, setDocumento] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar los datos del formulario a la API
  };

  return (
    <div className="ola4">
      <h1>Solicitud de propuesta</h1>
      <input className="ola"
        type="text"
        placeholder="Ingrese el municipio"
        value={localidad}
        onChange={(e) => setLocalidad(e.target.value)}
      />
      <input className="ola"
        type="text"
        placeholder="Ingrese el servicio"
        value={servicio}
        onChange={(e) => setServicio(e.target.value)}
      />
      <input className="ola"
        type="date"
        placeholder="Ingrese la fecha"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <input className="ola"
        type="time"
        placeholder="Ingrese la hora"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />
      <input className="ola"
        type="text"
        placeholder="Ingrese el documento"
        value={documento}
        onChange={(e) => setDocumento(e.target.value)}
      />
     <Link to="/mujeres"> <button className="ola2" onClick={handleSubmit}>Enviar</button></Link>
    </div>
  );
};

export default Form;