"use strict";
//GENERICOS EN TIPOS
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//cuando declaro una var ahi tengo q especificar cual es el type de T
var payload = {
    type: 'post',
    succes: true,
    message: "mensaje"
};
var payload2 = {
    type: 'error',
    succes: false,
    message: false
};
//ES IMP EL ORDEN DE LOS PARAMETROS, PONERLOS EN ORDEN 
var payload3 = {
    type: 'post',
    succes: true,
    message: "mensaje",
    whatever: 1
};
var payload4 = {
    type: 'error',
    succes: false,
    message: false,
    whatever: {}
};
//de etsa manera recibe un paramtro que puede ser de muchos tipos y retorna el tipo recibido
function subir(p, e) {
    return p;
}
var post = { msg: "Hola" };
var hola = "hola";
var y = subir(hola); //devuelve "hola" y no deberia pasar 
// console.log(y)
var x = subir({ msg: "Hola" });
function subir2(p, e) {
    return p;
}
var post2 = { id: 0, msg: "Hola" };
subir2(post2);
subir2({ id: 1 });
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
var todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
