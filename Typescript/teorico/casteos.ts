//CASTEOS EN AS
//cuando transformamos var d eun tipo en var de otro tipo

interface Geometria{
    lados: number
    pintar(): void
}

interface Triangulo extends Geometria{
    base: number
    altura: number
}

interface Cuadrado extends Geometria{
    lado: number
}

function procesar5(g: Geometria){
if(g.lados === 4){
    let cuadrado = g as Cuadrado //esta variable va a ser de tipo cuadrado
    //ahora puedo acceder a los atributos de cudadrado
    //otra forma de castear ... peor no es compatible con tsx
    /**
     * let cuadrado = (<Cuadrado> g)
     */
    cuadrado.lado 
}else if(g.lados === 3){
    let triangulo = g as Triangulo // esta var es de tipo triangulo
    triangulo.base 
}
}