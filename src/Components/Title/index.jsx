
 
// el import React from "react" se quita porque en el proyecto react no se esta usando
// cuando se usa style-components como en 
// const Titlr = styled.h1 despeues de esto se pone las tilde al reves para poner los comandos como ==> `color: grey`
//tamnien se instala la extension STYLED-COMPONENTS-REACT PARA QUE NOS AUTOCOMPPLETE
import styled from "styled-components";
const Title = styled.h1 `
    color: ${({theme})=> theme.text};
  padding: 25px 0;
  `
export default Title;
