//Clases 

//el constructor es la funcion q se ejecuta cuando usamos el new, por lo que todo lo que coloquemos en el constructor se va a invocar al hacer el new
class Rectangulo{
    //tipeo las "prop" de la Clase

  readonly #ancho: number
   #alto : number

   //private o #se usa para definir var y funciones q queremos q sean pridas, que no se pueda acceder a ellas
   //es propio de ts
   //readonly : para que no se pueda modificar su valor dsp de que fue declarada

    constructor(ancho: number, alto: number){
        this.#ancho = ancho;
        this.#alto = alto
    }

    private area(){
        return this.#alto*this.#ancho
    }

    perimetro(){
        return this.#ancho*2 + this.#alto*2
    }
}

let r1 = new Rectangulo(10,15);
let r2 = new Rectangulo(4,3)
//console.log(r1.area()) //como area() es private no se puede acceder a ella

//atributos virtuales con getters y setters

//atributos derivados son funciones que no manipulan info, sino que la derivan.Ej area, a partir de info devuelve algo
//no le pasamos por parametros valores pero, son capaces de derivar info a partir de datos que ya conoce

//los atributos getters y setters son aquellos que permiten manipularse dentro de la clase como si fuesen funciones/operaciones

class Rectangulo2{
    //tipeo las "prop" de la Clase

  readonly #ancho: number
   #alto : number

   _nombre: string = "nombre del Rectangulo"

    constructor(ancho: number, alto: number){
        this.#ancho = ancho;
        this.#alto = alto
    }

//al colocarle el get adelante se comporta por fuera como un atributo y por dentro como una funcion
//se lo llama como un atributo ej: r3.area y no r3area()
//nadie afuera saber que es una funcion 
//se reconocen como un atributo readonly, por lo que no se puede r3.area = 10. 
//Para modificar un atributo get se debe usar el set 
//imp pa envolver info 

    get area(){
        return this.#alto*this.#ancho
    }

    perimetro(){
        return this.#ancho*2 + this.#alto*2
    }

    get nombre(){
        console.log("Obtengo el nombre")
        return this._nombre
    }

    set nombre(value: string){
        console.log("seteo el nombre")
        this._nombre = value
    }
}

let r3 = new Rectangulo2(10,15);
let r4 = new Rectangulo2(4,3)
r4.nombre = "rectangulo 4" //primero se ejecuta la funcion de seteo y dsp la de get 
console.log(r4.nombre)


//Herencia.
//permite modificar como se va a comportar la clase superior
//la clase hija hereda todos los comportamientos d ela madre pero se pueden modificar 
//con "super" nos podemos referir a la clase superior 

abstract class Vehiculo{

    
    protected fabricante : string

    constructor(fabricante : string){
        this.fabricante = fabricante
    } //cada clase hija debe recibir por parametro todo lo que esta en el constructor de la clase madre y en el de la clase hija (si tiene),

    moverse(){
        console.log(`El vehiculo ${this.fabricante} se esta moviendo `)
    }

    protected llevarAlTaller(){
        console.log("llevar al taller")
    }
   
}

class VehiculoTerrestre extends Vehiculo{
   private tipo : string

//siempre que se crea un constructor en una clase hija, el hijo debe llamara a super(parametro)
constructor(fabricante: string, tipo: string){
    super(fabricante) 
    this.tipo = tipo

}
    moverse(){
        console.log(` Mi ${this.tipo} hace brum, brum y es una ${this.fabricante}`)
        super.moverse()
    }

     reparar(){
        console.log(`Un moemnto que me leo las instrcciones de ${this.fabricante}`)
    }

    reparacionTotal(){
        this.llevarAlTaller()
    }
}




 let v2 = new VehiculoTerrestre("yamaha", "moto")
 //console.log(v2)
 console.log(v2.reparacionTotal())
 //let v3 = new Vehiculo("auto") // no se puede instanciar pq es una clase abstracta


//Modificadores abtract y protected
//cuando una prop es privada en la clase madre, las clases hijas no pueden acceder a ellas 
//por eso se usa la palabra protected en lugar de private
//protected vs private => protected no pueden ser accedidos desde afuera pero si por las clases hijas. private por nadie 

//Clase abstracta => es una clase que sirve como "plantilla" es decir que esa clase no se puede instanciar, sirve solo como platilla para las clases hijas

//Tipar clase que tiene Herencia
let v5 : Vehiculo = new VehiculoTerrestre("bmw", "lancha") // de esta manera se encapsula cierta info de la instancia hija.
//tmb se puede :
let v6 : VehiculoTerrestre = new VehiculoTerrestre("bmw", "lancha") // asi no se encapsula la info de la clase hija 
