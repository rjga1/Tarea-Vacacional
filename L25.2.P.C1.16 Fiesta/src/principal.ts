/*17. FIESTA CON ANFITRIÓN

**Para una fiesta el anfitrión tiene cierta cantidad de cervezas y de hamburguesas. Los
*invitados también traen hamburguesas y cervezas. Se desea saber: a)cuántos productos trajo
*cada invitado y b)cuántos en total de cada uno hay en la fiesta.
*Suponiendo que el anfitrión tiene 30 cervezas y 10 hamburguesas, y que Liz trae 5
*hamburguesas, Juan 10 cervezas, Carla 20 cervezas y 5 hamburguesas, y Luis 10 cervezas y 10
*hamburguesas, entonces las salidas quedarían así:

*Liz trajo 5 productos
*Juan trajo 10 productos
*Carla trajo 25 productos
*Luis trajo 20 productos
*En total hay 70 cervezas y 30 hamburguesas*/ 

import Cl_fiesta from "./Cl_fiesta.js";
import Cl_invitados from "./Cl_invitados.js";

let anfitrion = new Cl_invitados("Anfitrion",30,10);
let invitado1 = new Cl_invitados("Liz",0,5);
let invitado2 = new Cl_invitados("Juán",10,0);
let invitado3 = new Cl_invitados("Carla",20,5);
let invitado4 = new Cl_invitados("Luis",10,10);

let fiesta = new Cl_fiesta();
fiesta.procesarInvitados(anfitrion);
fiesta.procesarInvitados(invitado1);
fiesta.procesarInvitados(invitado2);
fiesta.procesarInvitados(invitado3);
fiesta.procesarInvitados(invitado4);

let salida: HTMLElement | null = document.getElementById("salida");

if(salida){
    salida.innerHTML =
        "<strong> Salida por invitado </strong>" + "<br>" +
        "El"+" "+anfitrion.nombre +  " " +"aportó"+ " " + anfitrion.cantProd()+ " " + "productos" + "<br>"+
        invitado1.nombre +" "+ "trajo"+"  " + invitado1.cantProd()+" " + "productos" + "<br>"+
        invitado2.nombre +" "+ "trajo"+" " + invitado2.cantProd()+" "+ "productos" + "<br>"+
        invitado3.nombre +" "+ "trajo"+" " + invitado3.cantProd()+" " + "productos" + "<br>"+
        invitado4.nombre +" "+ "trajo"+" " + invitado4.cantProd()+" "+ "productos" + "<br>"+ "<br>"+

        "<strong> Salida por Fiesta </strong>" + "<br>" +
        "En total hay"+" " + fiesta.totalCervezas()+" " + "cervezas y"+" " + fiesta.totalHamb()+" " + "hamburguesas"      
}
else {
    console.log("No existe la salida");
};


    