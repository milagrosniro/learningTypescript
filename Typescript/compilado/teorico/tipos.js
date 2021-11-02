"use strict";
//Tipos literales => aceptan un unico valor. ej null o undefined son literales
var verdadera = true;
var cinco = 5;
//tmb se puede: 
var verdadero = true; //el tipo es true 
var verdad = true; //el tipo es boolean 
var login2 = {
    user: "mili",
    passw: "1245",
    login2: "login"
};
//Uniones de tipos 
//puede recibir un avlor de tipo string o numero 
function convertir(valor) {
    console.log(valor);
}
convertir("ho");
convertir(5);
var variable = { uno: true, dos: true };
var variable2 = { uno: true };
//Ts luego del typeof va a reconocer el tipo de valor y nos da acceso a sus metodos
//esto se puede usra con variables que no sean objetos
function convertir2(valor) {
    if (typeof valor === "string") {
        valor.trim();
    }
    else if (typeof valor === "number") {
        valor.toString();
    }
    else {
        console.log(valor); //este va a ser un avalor de tipo nulo. nunca se debe ejecutar
    }
}
function operacion(o) {
    if (o.tipo === "sumar") {
        return o.sumando1 + o.sumando2;
    }
    else if (o.tipo === "multiplicar") {
        return o.operando1 * o.operando2;
    }
}
/*
movibleYPosicionable = {
    posicion: Coordenada
    velocidad: Vector;
    aceleracion:Vector
}
 */
var obj = {
    posicion: [4, 5],
    velocidad: [5, 5],
    aceleracion: [5, 4]
};
