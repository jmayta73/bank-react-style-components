import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import transporte from "./assets/images/transporte.svg";
import otros from "./assets/images/otros.svg";
import utilidades from "./assets/images/utilidades.svg";

import { Icono, Iconotema } from "./Components/UI";

export default (type) => {
    console.log(type);
    const Images = {
        Restaurante : <Iconotema  src={alimentacion} alt = "Restaurante" />,
        Salud : <Iconotema  src={salud} alt = "Salud" />,
        
        Transporte : <Iconotema  src={transporte} alt = "Transporte" />,
        Utilidades : <Iconotema  src={utilidades} alt = "Utilidades" />, 
        default : <Iconotema  src= {otros } alt = "Otros" />,
    };

    return Images[type] || Images["default"] ;
}