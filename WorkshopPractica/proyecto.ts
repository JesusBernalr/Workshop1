// Proyecto.ts

import { Empleado } from './Persona';

export class Proyecto {
    nombre: string;
    descripcion: string;
    empleadosAsignados: Empleado[];

    constructor(nombre: string, descripcion: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.empleadosAsignados = [];
    }

    // Método para asignar un empleado al proyecto
    asignarEmpleado(empleado: Empleado): void {
        if (!this.empleadosAsignados.includes(empleado)) {
            this.empleadosAsignados.push(empleado);
            empleado.asignarProyecto(this); // Asignar este proyecto al empleado
        }
    }

    // Método para remover un empleado del proyecto
    removerEmpleado(empleado: Empleado): void {
        this.empleadosAsignados = this.empleadosAsignados.filter(emp => emp !== empleado);
        empleado.removerProyecto(this); // Remover este proyecto del empleado
    }

    // Mostrar detalles del proyecto y los empleados asignados
    mostrarDetalles(): void {
        console.log(`Proyecto: ${this.nombre} - ${this.descripcion}`);
        console.log("Empleados asignados:");
        this.empleadosAsignados.forEach(empleado => {
            console.log(`- ${empleado.nombre}`);
        });
    }
}
