//Type Alias o Tipos de alias => funcion propia de Typescript que permite fabricar tipos de datos propios con nombres propios
// q se corresponden con otroas ya existentes
//permite encapsular info, 

/*
type NombreDelValor = tipodedato
*/

type Numero = number

let n : Numero = 5

type loginCredential = {
    user : string,
    pass : string,
    remember?: boolean //el ? permite que este dato sea opcional 
}

function login(data : loginCredential){
    console.log(data.user)
}

login({user: "maria", pass:"1245"})
