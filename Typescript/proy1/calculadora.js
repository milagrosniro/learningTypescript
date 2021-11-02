//----------------------------------------tipo de dato que retorna
// function calculadora2(m:number, n:number): number{
//     let suma = m + n
//     console.log(`la suma es ${suma}`)
//     return suma
// }
// let x: boolean = calculadora2(3,4)
// let multiplicar : (m:number, n: number) => number
// multiplicar = function(m,n) {
//     return m*n
// }
//forma de tipear una funcion con cb
//se puede poner la declarac d una funcion dentro de ladeclarac de otra q recibe cb
var multiplicar2;
//funcion que recibe dos param y una cb que tiene como param el rdo de a*b
multiplicar2 = function (a, b, cb) { return cb(a * b); };
multiplicar2(4, 5, function (result) {
    console.log("Resultado " + result);
});
// console.log(multiplicar2(3,9))
