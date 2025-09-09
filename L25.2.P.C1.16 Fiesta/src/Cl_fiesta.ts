import Cl_invitados from "./Cl_invitados.js";

export default class Cl_fiesta{
    private acmCantCerv: number = 0;
    private acmCantHamb: number = 0;

    constructor(){
        this.acmCantCerv = 0;
        this.acmCantHamb = 0;
    }

    procesarInvitados(i:Cl_invitados): void {
        this.acmCantCerv += i.cantCerv;

        this.acmCantHamb += i.cantHamb;
    }

    totalCervezas():number{
        return this.acmCantCerv;
    }
    totalHamb():number{
        return this.acmCantHamb;
    }
        
};
