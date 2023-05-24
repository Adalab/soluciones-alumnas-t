"use strict";

//Parámetros:
//¿Es border-box? True/False
//width de la caja
//padding
//border-size
//Calcular ancho del contenido para border-box -> width-border-padding-padding-border
//Calcular ancho total de la caja para border-box -> width
//Calcular ancho del contenido para content-box -> width
//Calcular ancho total de la caja para content-box -> width+border+padding+padding+border
//Devuelve cadena: 'El ancho del contenido es: xxx y el ancho total de la caja es: xxx. '

// let borderBox = true || false;
// const boxWidth = Number;
// const borderSize = Number;
// const padding = Number;
// const sizingType = String;

// if (sizingType === 'border-box') {
//     borderBox = true;
//     } else {
//         borderBox = false;
// }

function calculadora(sizingType, boxWidth, padding, borderSize) {
  if (sizingType) {
    const borderBoxContentWidth = boxWidth - borderSize - padding - padding - borderSize;
    const borderBoxResult = `El ancho del contenido es: ${borderBoxContentWidth} y el ancho total de la caja es ${boxWidth}`;
    return borderBoxResult;
  } else {
        const contentBoxBoxWidth = boxWidth + borderSize + padding + padding + borderSize;
        const contentBoxResult = `El ancho del contenido es: ${boxWidth} y el ancho total de la caja es ${contentBoxBoxWidth}`;
        return contentBoxResult;
  }
}

console.log(calculadora(false, 200, 10, 10));
