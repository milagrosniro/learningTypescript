"use strict";
//interfaces : es un contrato. cuando hacemos una interfaz estamos creando un type donde declaramos ciertos aspectos que queremos que el objeto que tenga ese type tengan
//los obj de tipo interfaz deben tener solo lo que tiene la interfaz
var _a;
//si no tipeamos la funcion, la variable que creemos con esta funcion va a ser de type {user: string; created_ad: Date; superUser: boolean}
//si tipeamos la var va a ser de tipo userDate
function logIn() {
    return {
        user: "mili",
        created_ad: new Date(),
        superUser: true,
        logOut: function () { console.log("logOut"); },
        rename: function (user) {
            console.log(user);
        }
    };
}
var data = logIn();
//en el caso de un atributo que puede o no estar, para hacer alguna funcionalidad es necesario usar el if
// if(data.created_ad){
//     data.created_ad.toISOString()
// }
console.log((_a = data.created_ad) === null || _a === void 0 ? void 0 : _a.toISOString());
console.log(data.created_ad.toISOString()); //para q no se queje
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.sides = 4;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return this.width + 2 * this.height;
    };
    return Rectangle;
}());
var rectangle1 = new Rectangle(4, 5);
var shape1 = {
    sides: 10,
    area: function () {
        return 10;
    },
    perimeter: function () {
        return 5;
    }
};
function process(s) {
    console.log({ area: s.area() }); //permite solo acceder a los atributos de shape, aun si le mandemos un rectangle
}
console.log("process", process(shape1));
//esta clase va a tener q implementar la interface de VehiculoTerrestre2 y la de Vehiculo2
var OpelCorsa = /** @class */ (function () {
    function OpelCorsa() {
        this.fabricante = "bmw";
    }
    OpelCorsa.prototype.arrancarMotor = function () {
        console.log("rum rum");
    };
    OpelCorsa.prototype.repostar = function () {
        console.log("cargando nafta");
    };
    OpelCorsa.prototype.detenerMotor = function () {
        console.log("stop");
    };
    OpelCorsa.prototype.conducir = function () {
        console.log("conduciendo auto");
    };
    return OpelCorsa;
}());
function procesar2(s) {
    return s.conducir();
}
procesar2(new OpelCorsa()); //permite tener acceso solo a las funciones de VehiculoTerrestre2, este es otro tipo de abstracciones
//INTERFACES INDIZADAS
//tipos indizables en Js : array y object. permiten usar indices para acceder a sus valores 
var vector = [];
console.log(vector[0]);
var object = {
    displaName: "string",
    rpDisplayName: "string",
    id: "string"
};
var l = {};
var k = l[4];
console.log(k);
function sort(c) {
    var out = c("hola", "chau");
    console.log("ordenando con el criterio " + c.algorithm + ": " + out);
}
/**
 *
 * DIEFRENCIAS ENTRE TIPOS E INTERFACES
 *
 * es posible extender una interfaz declarando otras interfaz con el mismo nombre.
 *
 * Esto no es posible en los type
 *
 * Window --> es el objeto window(le obj global)
 *
 * declarar una var en el obj window
 *
 * interface Window {
 * accountID: number}
 * Eso me permite acceder
 * function use(w: Window){
 * w.accountID}
 */ 
