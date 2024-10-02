import { empleadosData } from "./empleados";
import { EstadoCivil } from "./enum";
import { Direccion } from "./interfaz";
import { crearYTransformarJSON } from "./util";
import { Proyecto } from "./proyecto";

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion;  // Añadir propiedad direccion
    vehiculos: Vehiculo[];
    estadoCivil: EstadoCivil;

    constructor(nombre: string, edad: number, direccion: Direccion, vehiculos: Vehiculo[] = [], estadoCivil: EstadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.vehiculos = vehiculos;
        this.estadoCivil = estadoCivil;
    }

    getEdad(): number {
        return this.edad;
    }

    saludar(): void {
        console.log('Persona: tu nombre es', this.nombre, 'y tienes', this.edad, 'años');
        console.log('Estado civil:', this.estadoCivil);
        console.log("Tus vehículos son:", this.vehiculos);
        console.log("");
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`Vehículo ${index + 1}: ${vehiculo.marca} ${vehiculo.modelo}`);
        });
    }
    arrancarVehiculos(): void {
        this.vehiculos.forEach(vehiculo => vehiculo.arrancar());
    }
}
export class Empleado extends Persona {
    salario: number;
    proyectos: Proyecto[]; // Proyectos asignados al empleado

    constructor(nombre: string, edad: number, salario: number, direccion: Direccion, vehiculos: Vehiculo[], estadoCivil: EstadoCivil) {
        super(nombre, edad, direccion, vehiculos, estadoCivil);  // Llama al constructor de la clase Persona
        this.salario = salario;
        this.proyectos = [];

    }

 // Método para asignar un proyecto al empleado
 asignarProyecto(proyecto: Proyecto): void {
    if (!this.proyectos.includes(proyecto)) {
        this.proyectos.push(proyecto);
    }
}

    // Método para remover un proyecto del empleado
    removerProyecto(proyecto: Proyecto): void {
        this.proyectos = this.proyectos.filter(proj => proj !== proyecto);
    }

        // Sobrescribir el método saludar para mostrar los proyectos del empleado
        saludar(): void {
            super.saludar();
            console.log("Proyectos asignados:");
            this.proyectos.forEach(proyecto => {
                console.log(`- ${proyecto.nombre}`);
            });
        }

    trabajar(horas: number): void {
        console.log(`${this.nombre} trabaja ${horas} horas al día.`);
    }
    saludar2(): void {
        console.log("");

        console.log(`Empleado: Hola ${this.nombre}, tu edad es ${this.getEdad()} y tu salario es de ${this.salario}`);
    }

    // Método para devolver los datos del empleado en formato JSON
    toJSON(): object {
        return {
            nombre: this.nombre,
            edad: this.getEdad(),
            salario: this.salario,
            direccion: this.direccion,
            vehiculos: this.vehiculos,
            estadoCivil: this.estadoCivil
        };
    }
}

// Instanciación de un objeto de la clase Empleado
const empleado1 = new Empleado("Carlos", 28, 50000, { calle: "Calle 1", ciudad: "Madrid", pais: "España" }, [], EstadoCivil.CASADO);
const empleado2 = new Empleado("Jeferson", 28, 50000, { calle: "Calle 1", ciudad: "Madrid", pais: "España" }, [], EstadoCivil.CASADO);

// Uso de los métodos heredados y propios de Empleado
empleado1.saludar(); // Llama al método saludar() heredado de Persona
empleado1.trabajar(8); // Llama al método trabajar() de Empleado
// Persona: Tú nombre es Juan y tienes 40 años

crearYTransformarJSON();

// Clase abstracta Vehiculo
export abstract class Vehiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    // Método abstracto que debe ser implementado por las subclases
    abstract arrancar(): void;

}

// Subclase Coche que hereda de Vehiculo
export class Coche extends Vehiculo {

    constructor(marca: string, modelo: string) {
        super(marca, modelo); // Llamada al constructor de la clase base Vehiculo
    }

    // Implementación del método arrancar para Coche
    arrancar(): void {
        console.log(`El coche ${this.marca} ${this.modelo} está arrancando con una llave.`);
    }
}
// Subclase Moto que hereda de Vehiculo
export class Moto extends Vehiculo {

    constructor(marca: string, modelo: string) {
        super(marca, modelo); // Llamada al constructor de la clase base Vehiculo
    }
    // Implementación del método arrancar para Moto
    arrancar(): void {
        console.log(`La moto ${this.marca} ${this.modelo} está arrancando con un botón de encendido.`);
    }
}
// Crear vehículos
const coche1 = new Coche("Toyota", "Corolla");
const moto1 = new Moto("Yamaha", "MT-07");
const coche2 = new Coche("Ford", "Focus");
const moto2 = new Moto("Kawasaki", "MT-07");

// Crear persona con vehículos
const persona1 = new Empleado("Juan", 35, 500000, { calle: "Calle 1", ciudad: "Madrid", pais: "España" }, [coche1, moto1], EstadoCivil.CASADO);
const persona2 = new Empleado("Ana", 28, 60000, { calle: "Calle 1", ciudad: "Madrid", pais: "España" }, [coche2, moto2], EstadoCivil.SOLTERO);

// La persona saluda y lista sus vehículos
persona1.saludar(); // Persona: Tu nombre es Juan y tienes 35 años. Tus vehículos son: ...
persona1.arrancarVehiculos(); // Arranca todos los vehículos

persona2.saludar(); // Persona: Tu nombre es Ana y tienes 28 años. Tus vehículos son: ...
persona2.arrancarVehiculos(); // Arranca todos los vehículos

// Interfaz para el formato del JSON
interface EmpleadoJSON {
    nombre: string;
    edad: number;
    salario: number;
    direccion: {
        calle: string;
        ciudad: string;
        pais: string;
    };
}

// Función para convertir el JSON en un arreglo de objetos Empleado
const convertirJSONAEmpleados = (): Empleado[] => {
    return empleadosData.map((empleadoData: any) => {
        const direccion: Direccion = {
            calle: empleadoData.direccion.calle,
            ciudad: empleadoData.direccion.ciudad,
            pais: empleadoData.direccion.pais
        };

        return new Empleado(empleadoData.nombre, empleadoData.edad, empleadoData.salario, direccion, empleadoData.vehiculos, empleadoData);
    });
};

// Función para devolver los empleados en formato JSON
const convertirEmpleadosAJSON = (empleados: Empleado[]): string => {
    const empleadosJSON = empleados.map(empleado => empleado.toJSON());
    return JSON.stringify({ empleados: empleadosJSON }, null, 2); // Formato con indentación de 2 espacios


};



// Convertimos el JSON en un arreglo de objetos Empleado
const empleadosArray = convertirJSONAEmpleados();

// Mostramos el arreglo de empleados
console.log("Arreglo de empleados como objetos Empleado:");
console.log(empleadosArray);

// Convertimos los objetos Empleado nuevamente a JSON
const empleadosEnJSON = convertirEmpleadosAJSON(empleadosArray);

// Mostramos el JSON resultante
console.log("Empleados convertidos nuevamente a JSON:");
console.log(empleadosEnJSON);

// Crear proyectos
const proyecto1 = new Proyecto("Proyecto A", "Desarrollo de una nueva aplicación");
const proyecto2 = new Proyecto("Proyecto B", "Mantenimiento de sistema existente");

// Asignar empleados a proyectos
proyecto1.asignarEmpleado(empleado1);
proyecto1.asignarEmpleado(empleado2);

proyecto2.asignarEmpleado(empleado2); // María estará en dos proyectos

// Mostrar los detalles de los proyectos
proyecto1.mostrarDetalles();
proyecto2.mostrarDetalles();