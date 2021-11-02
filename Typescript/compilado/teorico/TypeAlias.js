"use strict";
//Type Alias o Tipos de alias => funcion propia de Typescript que permite fabricar tipos de datos propios con nombres propios
// q se corresponden con otroas ya existentes
//permite encapsular info, 
var n = 5;
function login(data) {
    console.log(data.user);
}
login({ user: "maria", pass: "1245" });
