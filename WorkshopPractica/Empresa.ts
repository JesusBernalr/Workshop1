import { Empleado } from "./Persona"; // Asumiendo que ya tienes la clase Empleado importada
import { EstadoCivil } from "./enum";

export class Empresa {
    nombre: string;
    empleados: Empleado[]; // Lista de empleados

    constructor(nombre: string) {
        this.nombre = nombre;
        this.empleados = [];
    }

    // Método para agregar un empleado
    agregarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
        console.log(`Empleado ${empleado.nombre} ha sido agregado a la empresa ${this.nombre}.`);
    }

    // Método para eliminar un empleado por nombre
    eliminarEmpleado(nombre: string): void {
        const index = this.empleados.findIndex(empleado => empleado.nombre === nombre);

        if (index !== -1) {
            const eliminado = this.empleados.splice(index, 1);
            console.log(`Empleado ${eliminado[0].nombre} ha sido eliminado de la empresa ${this.nombre}.`);
        } else {
            console.log(`Empleado ${nombre} no encontrado en la empresa ${this.nombre}.`);
        }
    }

    // Método para calcular el total de salarios de todos los empleados
    calcularTotalSalarios(): number {
        const total = this.empleados.reduce((sum, empleado) => sum + empleado.salario, 0);
        console.log(`El total de salarios de la empresa ${this.nombre} es de ${total}.`);
        return total;
    }

    // Método para mostrar la lista de empleados
    listarEmpleados(): void {
        console.log(`Lista de empleados en la empresa ${this.nombre}:`);
        this.empleados.forEach((empleado, index) => {
            console.log(`${index + 1}. ${empleado.nombre} - Salario: ${empleado.salario}`);
        });
    }
}

// Ejemplo de uso:

// Crear la empresa
const empresa1 = new Empresa("Tech Solutions");

// Crear algunos empleados
const empleado1 = new Empleado("Juan", 30, 50000, { calle: "Calle 1", ciudad: "Madrid", pais: "España" }, [], EstadoCivil.CASADO);
const empleado2 = new Empleado("Ana", 28, 60000, { calle: "Calle 2", ciudad: "Barcelona", pais: "España" }, [], EstadoCivil.SOLTERO);

// Agregar empleados a la empresa
empresa1.agregarEmpleado(empleado1);
empresa1.agregarEmpleado(empleado2);

// Listar empleados
empresa1.listarEmpleados();

// Eliminar un empleado
empresa1.eliminarEmpleado("Juan");

// Listar empleados nuevamente
empresa1.listarEmpleados();

// Calcular el total de salarios
empresa1.calcularTotalSalarios();
