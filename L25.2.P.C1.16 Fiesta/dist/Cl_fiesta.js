import Cl_invitados from "./Cl_invitados.js";
export default class Cl_fiesta {
    acmCantCerv = 0;
    acmCantHamb = 0;
    constructor() {
        this.acmCantCerv = 0;
        this.acmCantHamb = 0;
    }
    procesarInvitados(i) {
        this.acmCantCerv += i.cantCerv;
        this.acmCantHamb += i.cantHamb;
    }
    totalCervezas() {
        return this.acmCantCerv;
    }
    totalHamb() {
        return this.acmCantHamb;
    }
}
;
