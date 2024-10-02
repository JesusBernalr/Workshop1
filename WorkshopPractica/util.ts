// Importar la clase Persona y la interfaz Direccion desde los archivos correspondientes
import { Persona, Vehiculo } from "./Persona";
import { EstadoCivil } from "./enum";
import { Direccion } from "./interfaz";

// Función flecha que convierte un objeto JSON a una instancia de Persona
const jsonToPersona = (json: { nombre: string; edad: number; direccion: Direccion; vehiculos: Vehiculo[], estadoCivil: EstadoCivil }): Persona => {
    return new Persona(json.nombre, json.edad, json.direccion, json.vehiculos, json.estadoCivil);
};

// Función que crea el objeto JSON y usa jsonToPersona
const crearYTransformarJSON = (): void => {
    // Crear el objeto JSON con la información de la Persona
    const personaJson = {
        nombre: "Lucía",
        edad: 29,
        direccion: {
            calle: "Calle 123",
            ciudad: "Madrid",
            pais: "España",
        },
    vehiculos: [],
    estadoCivil: EstadoCivil.SOLTERO
    };

    // Convertir el JSON a una instancia de Persona e invocar saludar()
    const persona = jsonToPersona(personaJson);
    persona.saludar();
};

// Exportamos las funciones para que puedan ser usadas en otros archivos
export { jsonToPersona, crearYTransformarJSON };
