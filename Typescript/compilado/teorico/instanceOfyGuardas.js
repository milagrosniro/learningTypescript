"use strict";
// //CASTEOS EN AS
// //cuando transformamos var d eun tipo en var de otro tipo
// interface Geometria{
//     lados: number
//     pintar(): void
// }
// interface Triangulo extends Geometria{
//     base: number
//     altura: number
// }
// interface Cuadrado extends Geometria{
//     lado: number
// }
// function procesar5(g: Geometria){
// if(g.lados === 4){
//     let cuadrado = g as Cuadrado //esta variable va a ser de tipo cuadrado
//     //ahora puedo acceder a los atributos de cudadrado
//     //otra forma de castear ... peor no es compatible con tsx
//     /**
//      * let cuadrado = (<Cuadrado> g)
//      */
//     cuadrado.lado 
// }else if(g.lados === 3){
//     let triangulo = g as Triangulo // esta var es de tipo triangulo
//     triangulo.base 
// }
// //guarda 
// function esGeometria(x: any) : x is Geometria{
//     return  x.lados && x.pintar 
// }
// function esCuadrado(x:any) : x is Cuadrado{
//     return esGeometria(x) && (x as any).lado && x.lados === 4
// }
// function esTraingulo(x: any): x is Triangulo{
//     return  esGeometria(x) && (x as any).base 
// }
// function procesarCuadrado(g: Geometria){
//     if( esCuadrado(g)){
//         g.lado
//     }
// }
// }
// //instance of y guardas 
// //instanceOf es de Js y sirve para saber si una variable es de deterinado tipo ej color.instanceOf "string"
// //en Ts tmb funciona 
// //NO funciona con interfaces, pq en Js no hay interfaces, por lo que solo en clases y objetos 
