//Tipos literales => aceptan un unico valor. ej null o undefined son literales

let verdadera : true = true
let cinco : 5 = 5

//tmb se puede: 
const verdadero = true //el tipo es true 
let verdad = true //el tipo es boolean 

type loginOperation = {
    login2 : 'login',
    user: string,
    passw : string
}

let login2 : loginOperation = {
    user: "mili",
    passw: "1245",
    login2: "login"
}

//Uniones de tipos 
//puede recibir un avlor de tipo string o numero 
function convertir( valor: string | number){
    console.log(valor)
}

convertir("ho")
convertir(5)


type A = {
    uno: boolean;
    dos: boolean
}

type B = {
    uno: boolean
}

let variable : A | B = {uno: true, dos: true}
let variable2 : A | B = {uno: true}

//Ts luego del typeof va a reconocer el tipo de valor y nos da acceso a sus metodos
//esto se puede usra con variables que no sean objetos
function convertir2( valor: string | number){
    if(typeof valor === "string"){
        valor.trim()
    }else if(typeof valor === "number"){
        valor.toString()
        
    }else{
        console.log(valor) //este va a ser un avalor de tipo nulo. nunca se debe ejecutar
    }
}

//Para var que son objetos...
//Uniones Discriminantes => hacemos union de distintos tipos q representan objetos, 

type OperacionSuma = {
    sumando1: number;
    sumando2: number;
    tipo: "sumar"
}


type OperacionMultiplicar = {
    operando1: number;
    operando2: number;
    tipo: "multiplicar"
}

type Operacion = OperacionMultiplicar | OperacionSuma

function operacion(o:Operacion){
    if(o.tipo === "sumar"){
        return o.sumando1 + o.sumando2
    }else if(o.tipo === "multiplicar"){
        return o.operando1 * o.operando2
    }
}

//Intersecciones de tipos => permite declarar tipos q se relacionan con multiples tipos 
// un valor ocn interseccion es a la vez, el conj de las intersecciones 

type Coordenada = [x: number, y: number] 
type Vector = [x: number, y: number]

type Posicionable = {
    posicion: Coordenada
}

type Movible = {
    velocidad: Vector;
    aceleracion:Vector
}

//esta var de este tipo  es de tipo posicionable Y de tipo Movible
type movibleYPosicionable = Posicionable & Movible

/*
movibleYPosicionable = {
    posicion: Coordenada
    velocidad: Vector;
    aceleracion:Vector
}
 */

let obj : movibleYPosicionable = {
    posicion: [4,5],
    velocidad: [5,5],
    aceleracion: [5,4]
}