/* boolean*/

true
false

let logico : boolean = false
let verdadero : boolean = true

/* number */

let numero : number = 14
let num2: number = 2.5
let hexadecimal : number = 0x4545cbd
let binario : number = 0b1001
let numLargo : number = 4_3454_4444 //los _ sirven para poner muchos numeros, se pueden usar como separadores de miles


/*string*/

let cadena : string = 'jdhfkshhks4545'


/*Tipos de datos propios de Ts, el transpilador no lo transpila */

/*any --> para cualq tipo de dato,*/

let cualquiera : any = true
cualquiera = "fglf"
cualquiera = 4

/*null*/

let nada : null = null

/*undefined*/

let indefinido : undefined = undefined

/*void --> se usa para indifcar q una funcion no indica nada, no se usa pa var, pq es pa funciones */
function saludar2(){
    console.log("hola")

}

let nadas : void = undefined //se puede tipar asi
let x = saludar2()


/*arrays y tuplas*/

//arrays

let arrayString : string[] = ["lunes", "martes", "miercoles"]

//tuplas --> son una especializacion de arrays, existe solo en Ts. Estructiras de datos para repartir dif datos
//array en el q se indica cuantos elem tiene y de que tipo
//se calara el tipo de cada dato en la posicion correcta

let db: [nombre:string, edad:number, fecha:string ]= ["marta",30, "20/02/2020"]

//objetos --> no primitivos
let persona: {
    nombre: string,
    edad: number,
    pais: string,
    nacimiento: Date,
    laboral:{
        empresa: string,
    }
} = {
    nombre: "Maria",
    edad: 28,
    pais: "argentina",
    nacimiento: new Date(16,8,1993),
    laboral:{empresa: "goOnboard"}
}

//no mira adentro del objeto 
   let objeto2 : object = {
       nombre: "Maria",
    edad: 28,
    pais: "argentina",
    nacimiento: new Date(16,8,1993),
    laboral:{empresa: "goOnboard"}
   }

