"use strict";
//CASTEOS EN AS
//cuando transformamos var d eun tipo en var de otro tipo
function procesar5(g) {
    if (g.lados === 4) {
        var cuadrado = g; //esta variable va a ser de tipo cuadrado
        //ahora puedo acceder a los atributos de cudadrado
        //otra forma de castear ... peor no es compatible con tsx
        /**
         * let cuadrado = (<Cuadrado> g)
         */
        cuadrado.lado;
    }
    else if (g.lados === 3) {
        var triangulo = g; // esta var es de tipo triangulo
        triangulo.base;
    }
}
