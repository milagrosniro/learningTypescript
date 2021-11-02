//GENERICOS EN TIPOS

/**Generico: es una manera de poner panametros en definiciones de tipos */
//permite influencias desde fuera en la declaracion de un tipo 
/**
 * se usan al declarar interfaces, funciones,class, type alias, etc 
 */

 interface Rta<T>{
    type: string,
    succes: boolean
    message: T, //aca se indica que el tipo de este atributo puede variar
}

//cuando declaro una var ahi tengo q especificar cual es el type de T
let payload : Rta<string> = {
    type: 'post',
    succes: true,
    message: "mensaje"
}

let payload2 : Rta<boolean> = {
    type: 'error',
    succes: false,
    message: false
}

//MULTIPLES GENERICOS Y BUENAS PRACTICAS

interface Rta2<Mensaje,Whathever>{
    type: string,
    succes: boolean
    message: Mensaje, //aca se indica que el tipo de este atributo puede variar
    whatever: Whathever
}

//ES IMP EL ORDEN DE LOS PARAMETROS, PONERLOS EN ORDEN 
let payload3 : Rta2<string, number> = {
    type: 'post',
    succes: true,
    message: "mensaje",
    whatever: 1
}

let payload4 : Rta2<boolean, object> = {
    type: 'error',
    succes: false,
    message: false,
    whatever: {}
}


//GENERICOS EN FUNCIONES

//datos para subir una publicacion en red social 
type Nota = {msg: string}
type NotaColorida= Nota & {color : string}
type Foto = {url: string}
type Video = Foto & {duracion: number}

//de etsa manera recibe un paramtro que puede ser de muchos tipos y retorna el tipo recibido
function subir<Publicacion, Extra>(p: Publicacion, e?: Extra) : Publicacion{
    return p
}
let post : Nota = {msg:"Hola"}
let hola : string = "hola"
let y = subir(hola) //devuelve "hola" y no deberia pasar 
// console.log(y)

let x = subir<Nota, "o">({msg:"Hola"})

//GENERICOS CON RESTRICCIONES
interface Post2{
    id: number
}

//especificicamos de quein extiende para poner RESTRICCIONES
interface Nota2 extends Post2{
    msg: string
}

interface NotaColorida2 extends Nota2{
    color : string
}

interface Foto2{
    url: string
}

interface Video2 extends Foto2{
duracion: number
}

function subir2<Publicacion extends Post2, Extra>(p: Publicacion, e?: Extra) : Publicacion{
    return p
}
let post2 : Nota2 = {id:0,msg:"Hola"}
subir2(post2)
subir2({id:1})

//TIPOS DE UTILIDAD
/**Estan en Hankbook en Utility Types 
 * 
 * Partial <Type> --> cuando le pasemos un type devuelve una version minimalista de ese tipo en la cual todos los campos son opcionales (este o este o este etc)
 * 
 * leer el resto en https://www.typescriptlang.org/docs/handbook/utility-types.html 
 * ej:
 */

 interface Todo {
    title: string;
    description: string;
  }
   
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
   
  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });
