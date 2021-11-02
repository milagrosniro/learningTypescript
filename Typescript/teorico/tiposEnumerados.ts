//Tipos enumerados, no existe en Js. 
//simula codigo virtual 
//sirve para limitar el rango de valores de una var 

//se puede asignar el valor del dia, pero los que le siguen tendran el valor +1 (lunes:105) y (miercoles:2)
enum DiaSemana {domigo=104,lunes, martes=1, miercoles}

interface CitaMedica {
dia: DiaSemana //solo pemrite los duas q estan definidos en DiaSemana
}

let c : CitaMedica = {
    dia : DiaSemana.lunes
}
console.log(c) //{"dia": 105} 
//Para evitar este problema, se le puede asigna string tmb

enum DiaSemana2 {domigo="domigo",lunes=1, martes="martes", miercoles="miercoles"}


//ENUMERADOS CON VALORES COMPUTADOS

enum Premium{
    EscribirMensaje = 1, //tmb se puede iniciar con el valor de una avr o funcion ejecutada
    Reaccionar = EscribirMensaje*2,
    EnviarEnlaces = Reaccionar*2,
    ConectarseACanalDeVoz = EnviarEnlaces*2
}