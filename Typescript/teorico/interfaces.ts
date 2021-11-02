

//interfaces : es un contrato. cuando hacemos una interfaz estamos creando un type donde declaramos ciertos aspectos que queremos que el objeto que tenga ese type tengan
//los obj de tipo interfaz deben tener solo lo que tiene la interfaz

interface userDate{
    readonly user: string;
     created_ad?: Date;
     superUser: boolean; //puede estar o no 
 
     logOut(): void;
     rename : (username: string) => void
 }
 
 //si no tipeamos la funcion, la variable que creemos con esta funcion va a ser de type {user: string; created_ad: Date; superUser: boolean}
 //si tipeamos la var va a ser de tipo userDate
 
 function logIn(): userDate{
     return{
         user:"mili",
         created_ad: new Date(),
         superUser: true,
         logOut(){console.log("logOut")},
         rename(user){
             console.log(user)
         }
     }
 }
 
 let data = logIn() 
 
 //en el caso de un atributo que puede o no estar, para hacer alguna funcionalidad es necesario usar el if
 
 // if(data.created_ad){
 //     data.created_ad.toISOString()
 // }
 
 console.log(data.created_ad?.toISOString())
 
 console.log(data.created_ad!.toISOString()) //para q no se queje

 //INterfaces con clases, se pueden usar pa q class implementen ciertos aspectos que esten deifnidos por interfaces 

//una clase peude implementar interfaces 

interface Shape {
    readonly sides : number
    area(): number
    perimeter() : number
}

class Rectangle implements Shape{
    sides = 4
    constructor( readonly width: number, readonly height: number){
        this.width = width
        this.height = height
    }

    area(): number{
        return this.width * this.height
    }

    perimeter() : number{
        return this.width + 2* this.height
    }
}

let rectangle1 = new Rectangle(4,5)
let shape1 : Shape = {
    sides : 10,
     area(): number{
        return 10
    },
    perimeter() : number{
        return 5
    }
} 


function process(s: Shape){
    console.log({area: s.area()}) //permite solo acceder a los atributos de shape, aun si le mandemos un rectangle
}

console.log("process", process(shape1))

//HERENCIA DE INTERFACES

interface Vehiculo2{
    readonly fabricante: string
     arrancarMotor() : void
     repostar() : void
     detenerMotor() : void
 }
 
 interface VehiculoTerrestre2 extends Vehiculo2{
     conducir(): void
 }
 
 //esta clase va a tener q implementar la interface de VehiculoTerrestre2 y la de Vehiculo2
 class OpelCorsa implements VehiculoTerrestre2{
 
  fabricante: string ="bmw"
     arrancarMotor() : void{
         console.log("rum rum")
     }
     repostar() : void{
         console.log("cargando nafta")
     }
     detenerMotor() : void{
         console.log("stop")
     }
 
     conducir(): void{
         console.log("conduciendo auto")
     }
 }
 
 function procesar2(s: VehiculoTerrestre2){
     return s.conducir()
 }
 
 procesar2(new OpelCorsa()) //permite tener acceso solo a las funciones de VehiculoTerrestre2, este es otro tipo de abstracciones
 
 //Hoy en dia se estas funcioanlidades las pueden hacer los type 
 
 type Vehiculo3 = {
    readonly fabricante: string
     arrancarMotor() : void
     repostar() : void
     detenerMotor() : void
 }
 
 type VehiculoTerrestre3 = Vehiculo3 & { conducir(): void}


 //INTERFACES INDIZADAS

//tipos indizables en Js : array y object. permiten usar indices para acceder a sus valores 

let vector : number[] = []
console.log(vector[0])

type Account = {
    displaName: string
    rpDisplayName: string
    id: string
}

let object : Account = {
displaName: "string",
    rpDisplayName: "string",
    id: "string"
}

interface indizable{
    //lo q va a ir en [] : el tipo de rdo q me va a dar
    [index:number] : boolean
}

let l: indizable = {}

let k = l[4]
console.log(k)


//Funciones y tipos hibridos
//las interfaces s epueden usar para declarar tipos que representen Funciones
//Tipo hibrido: algo q se puede llamara pero q tmb tiene atributos. ej: una funcion

//type Comparator = (a: string, b: string) => number => esto se puede hace con interfaz asi...

interface Comparator{
    (a: string, b: string) : number
    algorithm : string
    safe: boolean
}

function sort(c: Comparator){
   let out = c("hola", "chau")
   console.log(`ordenando con el criterio ${c.algorithm}: ${out}`)
}

type Comparator2 ={ (a: string, b: string) : number
 algorithm : string
    safe: boolean
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