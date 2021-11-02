"use strict";
//Tipos enumerados, no existe en Js. 
//simula codigo virtual 
//sirve para limitar el rango de valores de una var 
//se puede asignar el valor del dia, pero los que le siguen tendran el valor +1 (lunes:105) y (miercoles:2)
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["domigo"] = 104] = "domigo";
    DiaSemana[DiaSemana["lunes"] = 105] = "lunes";
    DiaSemana[DiaSemana["martes"] = 1] = "martes";
    DiaSemana[DiaSemana["miercoles"] = 2] = "miercoles";
})(DiaSemana || (DiaSemana = {}));
var c = {
    dia: DiaSemana.lunes
};
console.log(c); //{"dia": 105} 
//Para evitar este problema, se le puede asigna string tmb
var DiaSemana2;
(function (DiaSemana2) {
    DiaSemana2["domigo"] = "domigo";
    DiaSemana2[DiaSemana2["lunes"] = 1] = "lunes";
    DiaSemana2["martes"] = "martes";
    DiaSemana2["miercoles"] = "miercoles";
})(DiaSemana2 || (DiaSemana2 = {}));
//ENUMERADOS CON VALORES COMPUTADOS
var Premium;
(function (Premium) {
    Premium[Premium["EscribirMensaje"] = 1] = "EscribirMensaje";
    Premium[Premium["Reaccionar"] = 2] = "Reaccionar";
    Premium[Premium["EnviarEnlaces"] = 4] = "EnviarEnlaces";
    Premium[Premium["ConectarseACanalDeVoz"] = 8] = "ConectarseACanalDeVoz";
})(Premium || (Premium = {}));
