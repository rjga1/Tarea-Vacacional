import Cl_Pasajero from "./Cl_Pasajero.js";
import Cl_Taxista from "./Cl_Taxista.js";

let Peter: Cl_Pasajero = new Cl_Pasajero("Peter", 2);
let Fatima: Cl_Pasajero = new Cl_Pasajero("Fatima", 1);
let Paul: Cl_Pasajero = new Cl_Pasajero("Paul", 2);
let Pedro: Cl_Pasajero = new Cl_Pasajero("Pedro", 2);
let Rita: Cl_Pasajero = new Cl_Pasajero("Rita", 1);
let Linda: Cl_Pasajero = new Cl_Pasajero("Linda", 2);
let Carmen: Cl_Pasajero = new Cl_Pasajero("Carmen", 1);
let Robert: Cl_Pasajero = new Cl_Pasajero("Robert", 2);
let Flor: Cl_Pasajero = new Cl_Pasajero("Flor", 2);
let Frank: Cl_Pasajero = new Cl_Pasajero("Frank", 2);

let taxista: Cl_Taxista = new Cl_Taxista(600, 20);

taxista.procesarPasajero(Peter);
taxista.procesarPasajero(Fatima);
taxista.procesarPasajero(Paul);
taxista.procesarPasajero(Pedro);
taxista.procesarPasajero(Rita);
taxista.procesarPasajero(Linda);
taxista.procesarPasajero(Carmen);
taxista.procesarPasajero(Robert);
taxista.procesarPasajero(Flor);
taxista.procesarPasajero(Frank);

let salida: HTMLElement | null = document.getElementById("salida");
if(salida) {

    salida.innerHTML += `<p> ${taxista.nombrePasajeroCaramelo()} reciben caramelos`;
    salida.innerHTML += `<p> El taxista al finalizar tiene $${taxista.totalDolares()} y Bs.${taxista.totalBolivares()}`;
    salida.innerHTML += `<p> Se repartieron un total de ${taxista.cantidadCaramelosRepartidos()} caramelos`;
    salida.innerHTML += `<p> El ${taxista.promedioPasajerosBolivares()}% de los pasajeros pagaron en bolívares`;
} else {
    console.log("No se encontró el elemento con id 'salida'");
}