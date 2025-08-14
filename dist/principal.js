import Cliente from "./Cl_Cliente.js";
import Agencia from "./Cl_Agencia.js";
let cliente1 = new Cliente("15457858", "A");
let cliente2 = new Cliente("15457859", "B");
let cliente3 = new Cliente("15457667", "C");
let agencia = new Agencia();
agencia.procesarCliente(cliente1);
agencia.procesarCliente(cliente2);
agencia.procesarCliente(cliente3);
let salida = document.getElementById("salida");
if (salida) {
    salida.innerHTML += `<p>El precio a pagar por el suscriptor ${cliente1.cedula} es de ${cliente1.totalPagar()}$</p>`;
    salida.innerHTML += `<p>El precio a pagar por el suscriptor ${cliente2.cedula} es de ${cliente2.totalPagar()}$</p>`;
    salida.innerHTML += `<p>El precio a pagar por el suscriptor ${cliente3.cedula} es de ${cliente3.totalPagar()}$</p>`;
    salida.innerHTML += `<p>El porcentaje de suscriptores que no pagaron servicio de conexion es de ${agencia.porcentajeSinServicioConexion()}%</p>`;
    salida.innerHTML += `<p>El plan favorito es ${agencia.planFavorito()}</p>`;
}
else {
    console.log("No existe la salida");
}
;
