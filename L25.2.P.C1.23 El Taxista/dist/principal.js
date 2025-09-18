import Cl_Pasajero from "./Cl_Pasajero.js";
import Cl_Taxista from "./Cl_Taxista.js";
let Peter = new Cl_Pasajero("Peter", 2);
let Fatima = new Cl_Pasajero("Fatima", 1);
let Paul = new Cl_Pasajero("Paul", 2);
let Pedro = new Cl_Pasajero("Pedro", 2);
let Rita = new Cl_Pasajero("Rita", 1);
let Linda = new Cl_Pasajero("Linda", 2);
let Carmen = new Cl_Pasajero("Carmen", 1);
let Robert = new Cl_Pasajero("Robert", 2);
let Flor = new Cl_Pasajero("Flor", 2);
let Frank = new Cl_Pasajero("Frank", 2);
let taxista = new Cl_Taxista(600, 20);
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
let salida = document.getElementById("salida");
if (salida) {
    salida.innerHTML += `<p> ${taxista.nombrePasajeroCaramelo()} reciben caramelos`;
    salida.innerHTML += `<p> El taxista al finalizar tiene $${taxista.totalDolares()} y Bs.${taxista.totalBolivares()}`;
    salida.innerHTML += `<p> Se repartieron un total de ${taxista.cantidadCaramelosRepartidos()} caramelos`;
    salida.innerHTML += `<p> El ${taxista.promedioPasajerosBolivares()}% de los pasajeros pagaron en bolívares`;
}
else {
    console.log("No se encontró el elemento con id 'salida'");
}
