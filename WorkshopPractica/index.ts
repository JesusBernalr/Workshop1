import { Persona, Empleado , Coche, Moto, Vehiculo} from "./Persona";
import { empleadosData } from "./empleados";
import { Direccion } from "./interfaz";
import { EstadoCivil } from "./enum";

const personas1 = [

    new Persona("Juan", 25,   {calle: "", ciudad: "Barranquilla", pais: "" }, [], EstadoCivil.CASADO),
    new Persona("Maria", 30,    {calle: "02", ciudad: "Soledad", pais: "Colombia" }, [], EstadoCivil.CASADO),
    new Persona("Carlos", 28,   {calle: "03", ciudad: "Cartagena", pais: "Colombia" }, [], EstadoCivil.CASADO),
    new Persona("Laura", 32,    {calle: "04", ciudad: "Sabana Larga", pais: "Colombia" }, [], EstadoCivil.CASADO),
    new Persona("Pedro", 27,    {calle: "05", ciudad: "Medellin", pais: "Colombia" }, [], EstadoCivil.CASADO),
    new Persona("Ana", 29,      {calle: "06", ciudad: "Cali", pais: "Colombia" }, [], EstadoCivil.CASADO),
    new Persona("José", 31,     {calle:"07", ciudad: "Bogota",pais:"Colombia"},[],EstadoCivil.CASADO),
    new Persona("Marta", 26,    {calle:"08", ciudad: "Buenos Aires",pais:"Argentina"},[],EstadoCivil.CASADO),
    new Persona("Luis", 33,     {calle:"09", ciudad: "Puerto la Cruz",pais:"Venezuela"},[],EstadoCivil.CASADO),
    new Persona("Elena", 24,    {calle:"10", ciudad: "Maracaibo",pais:"Venezuela"},[],EstadoCivil.CASADO),
];
personas1.forEach(personas1 => {
    personas1.saludar();
});

console.log("");

const empleados: Empleado[] = [
    new Empleado("Juan", 25, 50000, { calle: "Calle 11", ciudad: "Madrid", pais: "España" }, [], EstadoCivil.SOLTERO),
    new Empleado("María", 30, 55000, { calle: "Calle 12", ciudad: "Barcelona", pais: "España" }, [], EstadoCivil.DIVORCIO),
    new Empleado("Carlos", 28, 52000, { calle: "Calle 13", ciudad: "Valencia", pais: "España" }, [], EstadoCivil.CASADO),
    new Empleado("Laura", 32, 58000, { calle: "Calle 14", ciudad: "Sevilla", pais: "España" }, [], EstadoCivil.CASADO),
    new Empleado("Pedro", 27, 51000, { calle: "Calle 15", ciudad: "Zaragoza", pais: "España" }, [], EstadoCivil.DIVORCIO),
    new Empleado("Ana", 29, 53000, { calle: "Calle 16", ciudad: "Málaga", pais: "España" }, [], EstadoCivil.SOLTERO),
    new Empleado("José", 31, 56000, { calle: "Calle 17", ciudad: "Bilbao", pais: "España" }, [], EstadoCivil.DIVORCIO),
    new Empleado("Marta", 26, 50500, { calle: "Calle 18", ciudad: "Granada", pais: "España" }, [], EstadoCivil.SOLTERO),
    new Empleado("Luis", 33, 59000, { calle: "Calle 19", ciudad: "Córdoba", pais: "España" }, [], EstadoCivil.CASADO),
    new Empleado("Elena", 24, 49500, { calle: "Calle 20", ciudad: "Alicante", pais: "España" }, [], EstadoCivil.CASADO),
];

// Invocación del método saludar para cada objeto de Empleado
empleados.forEach(empleado => {
    empleado.saludar();
});
