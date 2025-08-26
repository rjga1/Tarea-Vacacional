/* La casa de moneda abre con cierta cantidad de cada billete para cambio (1: $10, 2: $20,
3: $50), y llegan los clientes buscando sencillo; ejemplo: traen uno de $100 y se llevan 1 de
$50, 2 de $20 y 1 de $10. Se conoce por la casa la cantidad inicial de los billetes para cambio, y
por cada cliente el billete a cambiar (i. $100, ii. $50, iii. $20) y la cantidad correcta de cada
billete que desea para el cambio que recibirá. Se desea conocer por cada cliente: a) la cantidad
de billetes que se lleva, y por un día de servicios en la casa: b) el monto total cambiado, c) la
cantidad que le queda de cada tipo de billete para cambio, incluyendo los de $100.
La casa informa que, por ejemplo, el día anterior se comenzó con 20 billetes de $10, 10 de
$20 y 6 de $50, y se procesaron los siguientes registros: (nombre, billete, cambioDe50, cambioDe20, cambioDe10) (Luis, 100, 2, 0, 0) (Ana, 50, 0, 2, 1) (José, 100, 0, 4, 2)
(Carmen, 20, 0, 0, 2) (Eva, 50, 0, 1, 3), según lo cual la salida requerida presenta el siguiente
formato:
Luis se lleva 2 billetes
Ana se lleva 3 billetes
José se lleva 6 billetes
Carmen se lleva 2 billetes
Eva se lleva 4 billetes
Se cambiaron $320
Quedaron 2 billetes de $100
Quedaron 4 billetes de $50
Quedaron 3 billetes de $20
Quedaron 12 billetes de $10  */
import Cl_Cliente from "./Cl_Cliente.js";
import Cl_CasaMoneda from "./Cl_CasaMoneda.js";
const cliente1 = new Cl_Cliente("Luis", 100, 2, 0, 0);
const cliente2 = new Cl_Cliente("Ana", 50, 0, 2, 1);
const cliente3 = new Cl_Cliente("José", 100, 0, 4, 2);
const cliente4 = new Cl_Cliente("Carmen", 20, 0, 0, 2);
const cliente5 = new Cl_Cliente("Eva", 50, 0, 1, 3);
const casaMoneda = new Cl_CasaMoneda(6, 10, 20);
casaMoneda.procesarCliente(cliente1);
casaMoneda.procesarCliente(cliente2);
casaMoneda.procesarCliente(cliente3);
casaMoneda.procesarCliente(cliente4);
casaMoneda.procesarCliente(cliente5);
const salida = document.getElementById("salida");
if (salida) {
    salida.innerHTML =
        "<strong> Salida Por Cliente </strong>" + "<br>" +
            cliente1.nombre + " se lleva " + cliente1.cantBilletesDevueltos() + " billetes" + "<br>" +
            cliente2.nombre + " se lleva " + cliente2.cantBilletesDevueltos() + " billetes" + "<br>" +
            cliente3.nombre + " se lleva " + cliente3.cantBilletesDevueltos() + " billetes" + "<br>" +
            cliente4.nombre + " se lleva " + cliente4.cantBilletesDevueltos() + " billetes" + "<br>" +
            cliente5.nombre + " se lleva " + cliente5.cantBilletesDevueltos() + " billetes" + "<br>" + "<br>" +
            "<strong> Salida De La Casa De Moneda </strong>" + "<br>" +
            "Se cambiaron $" + casaMoneda.montoTotalCambiado() + "<br>" +
            casaMoneda.billetesDisponibles();
}
