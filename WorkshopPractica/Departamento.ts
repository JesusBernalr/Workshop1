import { EstadoCivil } from './enum';
import { Empleado } from './Persona'; // Asume que la clase Empleado está en un archivo separado

export class Departamento {
    nombre: string;
    empleados: Empleado[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.empleados = [];
    }

    // Método para agregar un empleado al departamento
    agregarEmpleado(empleado: Empleado): void {
        if (!this.empleados.includes(empleado)) {
            this.empleados.push(empleado);
            console.log(`Empleado ${empleado.nombre} añadido al departamento ${this.nombre}.`);
        } else {
            console.log(`El empleado ${empleado.nombre} ya está en el departamento ${this.nombre}.`);
        }
    }

    // Método para eliminar un empleado del departamento
    eliminarEmpleado(empleado: Empleado): void {
        const index = this.empleados.indexOf(empleado);
        if (index > -1) {
            this.empleados.splice(index, 1);
            console.log(`Empleado ${empleado.nombre} eliminado del departamento ${this.nombre}.`);
        } else {
            console.log(`El empleado ${empleado.nombre} no se encuentra en el departamento ${this.nombre}.`);
        }
    }

    // Método para listar a todos los empleados del departamento
    listarEmpleados(): void {
        console.log(`Lista de empleados en el departamento ${this.nombre}:`);
        if (this.empleados.length > 0) {
            this.empleados.forEach((empleado, index) => {
                console.log(`${index + 1}. ${empleado.nombre}`);
            });
        } else {
            console.log(`No hay empleados en el departamento ${this.nombre}.`);
        }
    }
}

// Ejemplo de uso
const departamentoIT = new Departamento("IT");
const empleado1 = new Empleado("Carlos", 28, 50000, { calle: "Calle 1", ciudad: "Madrid", pais: "España" }, [], EstadoCivil.CASADO);
const empleado2 = new Empleado("Ana", 28, 60000, { calle: "Calle 1", ciudad: "Madrid", pais: "España" }, [], EstadoCivil.SOLTERO);

// Añadir empleados al departamento
departamentoIT.agregarEmpleado(empleado1);
departamentoIT.agregarEmpleado(empleado2);

// Listar empleados del departamento
departamentoIT.listarEmpleados();

// Eliminar un empleado
departamentoIT.eliminarEmpleado(empleado1);

// Listar nuevamente los empleados
departamentoIT.listarEmpleados();