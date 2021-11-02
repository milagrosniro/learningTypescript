"use strict";
//Clases 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Rectangulo_ancho, _Rectangulo_alto, _Rectangulo2_ancho, _Rectangulo2_alto;
//el constructor es la funcion q se ejecuta cuando usamos el new, por lo que todo lo que coloquemos en el constructor se va a invocar al hacer el new
var Rectangulo = /** @class */ (function () {
    //private o #se usa para definir var y funciones q queremos q sean pridas, que no se pueda acceder a ellas
    //es propio de ts
    //readonly : para que no se pueda modificar su valor dsp de que fue declarada
    function Rectangulo(ancho, alto) {
        //tipeo las "prop" de la Clase
        _Rectangulo_ancho.set(this, void 0);
        _Rectangulo_alto.set(this, void 0);
        __classPrivateFieldSet(this, _Rectangulo_ancho, ancho, "f");
        __classPrivateFieldSet(this, _Rectangulo_alto, alto, "f");
    }
    Rectangulo.prototype.area = function () {
        return __classPrivateFieldGet(this, _Rectangulo_alto, "f") * __classPrivateFieldGet(this, _Rectangulo_ancho, "f");
    };
    Rectangulo.prototype.perimetro = function () {
        return __classPrivateFieldGet(this, _Rectangulo_ancho, "f") * 2 + __classPrivateFieldGet(this, _Rectangulo_alto, "f") * 2;
    };
    return Rectangulo;
}());
_Rectangulo_ancho = new WeakMap(), _Rectangulo_alto = new WeakMap();
var r1 = new Rectangulo(10, 15);
var r2 = new Rectangulo(4, 3);
//console.log(r1.area()) //como area() es private no se puede acceder a ella
//atributos virtuales con getters y setters
//atributos derivados son funciones que no manipulan info, sino que la derivan.Ej area, a partir de info devuelve algo
//no le pasamos por parametros valores pero, son capaces de derivar info a partir de datos que ya conoce
//los atributos getters y setters son aquellos que permiten manipularse dentro de la clase como si fuesen funciones/operaciones
var Rectangulo2 = /** @class */ (function () {
    function Rectangulo2(ancho, alto) {
        //tipeo las "prop" de la Clase
        _Rectangulo2_ancho.set(this, void 0);
        _Rectangulo2_alto.set(this, void 0);
        this._nombre = "nombre del Rectangulo";
        __classPrivateFieldSet(this, _Rectangulo2_ancho, ancho, "f");
        __classPrivateFieldSet(this, _Rectangulo2_alto, alto, "f");
    }
    Object.defineProperty(Rectangulo2.prototype, "area", {
        //al colocarle el get adelante se comporta por fuera como un atributo y por dentro como una funcion
        //se lo llama como un atributo ej: r3.area y no r3area()
        //nadie afuera saber que es una funcion 
        //se reconocen como un atributo readonly, por lo que no se puede r3.area = 10. 
        //Para modificar un atributo get se debe usar el set 
        //imp pa envolver info 
        get: function () {
            return __classPrivateFieldGet(this, _Rectangulo2_alto, "f") * __classPrivateFieldGet(this, _Rectangulo2_ancho, "f");
        },
        enumerable: false,
        configurable: true
    });
    Rectangulo2.prototype.perimetro = function () {
        return __classPrivateFieldGet(this, _Rectangulo2_ancho, "f") * 2 + __classPrivateFieldGet(this, _Rectangulo2_alto, "f") * 2;
    };
    Object.defineProperty(Rectangulo2.prototype, "nombre", {
        get: function () {
            console.log("Obtengo el nombre");
            return this._nombre;
        },
        set: function (value) {
            console.log("seteo el nombre");
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangulo2;
}());
_Rectangulo2_ancho = new WeakMap(), _Rectangulo2_alto = new WeakMap();
var r3 = new Rectangulo2(10, 15);
var r4 = new Rectangulo2(4, 3);
r4.nombre = "rectangulo 4"; //primero se ejecuta la funcion de seteo y dsp la de get 
console.log(r4.nombre);
//Herencia.
//permite modificar como se va a comportar la clase superior
//la clase hija hereda todos los comportamientos d ela madre pero se pueden modificar 
//con "super" nos podemos referir a la clase superior 
var Vehiculo = /** @class */ (function () {
    function Vehiculo(fabricante) {
        this.fabricante = fabricante;
    } //cada clase hija debe recibir por parametro todo lo que esta en el constructor de la clase madre y en el de la clase hija (si tiene),
    Vehiculo.prototype.moverse = function () {
        console.log("El vehiculo " + this.fabricante + " se esta moviendo ");
    };
    Vehiculo.prototype.llevarAlTaller = function () {
        console.log("llevar al taller");
    };
    return Vehiculo;
}());
var VehiculoTerrestre = /** @class */ (function (_super) {
    __extends(VehiculoTerrestre, _super);
    //siempre que se crea un constructor en una clase hija, el hijo debe llamara a super(parametro)
    function VehiculoTerrestre(fabricante, tipo) {
        var _this = _super.call(this, fabricante) || this;
        _this.tipo = tipo;
        return _this;
    }
    VehiculoTerrestre.prototype.moverse = function () {
        console.log(" Mi " + this.tipo + " hace brum, brum y es una " + this.fabricante);
        _super.prototype.moverse.call(this);
    };
    VehiculoTerrestre.prototype.reparar = function () {
        console.log("Un moemnto que me leo las instrcciones de " + this.fabricante);
    };
    VehiculoTerrestre.prototype.reparacionTotal = function () {
        this.llevarAlTaller();
    };
    return VehiculoTerrestre;
}(Vehiculo));
var v2 = new VehiculoTerrestre("yamaha", "moto");
//console.log(v2)
console.log(v2.reparacionTotal());
//let v3 = new Vehiculo("auto") // no se puede instanciar pq es una clase abstracta
//Modificadores abtract y protected
//cuando una prop es privada en la clase madre, las clases hijas no pueden acceder a ellas 
//por eso se usa la palabra protected en lugar de private
//protected vs private => protected no pueden ser accedidos desde afuera pero si por las clases hijas. private por nadie 
//Clase abstracta => es una clase que sirve como "plantilla" es decir que esa clase no se puede instanciar, sirve solo como platilla para las clases hijas
//Tipar clase que tiene Herencia
var v5 = new VehiculoTerrestre("bmw", "lancha"); // de esta manera se encapsula cierta info de la instancia hija.
//tmb se puede :
var v6 = new VehiculoTerrestre("bmw", "lancha"); // asi no se encapsula la info de la clase hija 
