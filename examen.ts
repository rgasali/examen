/*
Ejercicios de codeo:





Queda a elección de cada uno de los alumnos, si hacer los ejercicios por separado o en caso contrario hacer todo en una misma clase
Modo de entrega:
Al igual a lo que venimos trabajando se debera subir el pr correspondiente a git, y mandarselo a su tutor asignado
*/

//Crear una clase -con al menos 2 métodos y 2 atributos-
class Bicicleta {
    public material:string;
    public rodado:number;
    public velocidad:number;

    public constructor(material:string,rodado:number,velocidad:number){
        this.material=material;
        this.rodado=rodado;
        this.velocidad=velocidad;
    }

    public rodar():void{
        this.velocidad=20
    }

    public frenar():void{
        this.velocidad=0
    }

    getVelocidad():number{
        return this.velocidad
    }

}

//Crear un objeto
let miBicicleta= new Bicicleta("aluminio",29,0)




//Crear una interfaz - implementarla en una clase-

interface Animal {
comunicarse():string;
defenderse():string;
}

class Perro implements Animal{
    
    public raza:string;
    public edad:number;
    
    public constructor(raza:string,edad:number){
        this.raza=raza;
        this.edad=edad;
    }
    
    comunicarse(): string {
        return "woff woff"
    }

    defenderse():string{
        return "mordiendo"
    }
}

// Crear una clase Abstracta

abstract class Lampara{
     material:string;
     tamanio:number;
    abstract iluminacion:string;

    abstract encender():void;
    abstract apagar():void;
}

//Crear una relación de herencia

class Telefono{
    protected linea:number;
    protected marca:string;

    public constructor(linea:number,marca:string){
        this.linea=linea;
        this.marca=marca;
    }

    public llamar():string{
        return "esta llamando"
    }

}

class TelefonoConCamara extends Telefono{
    private zoom:number;
    private flash:boolean;

    public constructor(linea:number,marca:string,zoom:number,flash:boolean){
        super(linea,marca)
        this.zoom=zoom;
        this.flash=flash;
    }
    
    public sacarFoto():string{
        return "se acaba de sacar una foto"
    }

}

//Crear un ejemplo de composición

class Motor {
    public nombre:string;
    public potencia:number;
    public combustion:string;

    public constructor(nombre:string,potencia:number,combustion:string){
        this.nombre=nombre;
        this.potencia=potencia;
        this.combustion=combustion;
    }
    public encender():string{
        return "el motor esta encendido"
    }
    public getNombre():string{
        return this.nombre;
    }
}



class Auto {
    private marca:string;
    private butacas:number;
    private motor:Motor; 

    public constructor(marca:string,butacas:number,motor:Motor){
        this.marca=marca;
        this.butacas=butacas;
        this.motor=motor;
    }

    public cerrar():string{
        return "el auto se ha cerrado en forma centralizada"
    }
}
