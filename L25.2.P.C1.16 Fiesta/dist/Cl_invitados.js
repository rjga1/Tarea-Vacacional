export default class Cl_invitados {
    _nombre = "";
    _cantCerv = 0;
    _cantHamb = 0;
    constructor(nombre, cantCerv, cantHamb) {
        this.nombre = nombre;
        this.cantCerv = cantCerv;
        this.cantHamb = cantHamb;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set cantCerv(cantCerv) {
        this._cantCerv = +cantCerv;
    }
    get cantCerv() {
        return this._cantCerv;
    }
    set cantHamb(cantHamb) {
        this._cantHamb = +cantHamb;
    }
    get cantHamb() {
        return this._cantHamb;
    }
    cantProd() {
        return this.cantCerv + this.cantHamb;
    }
}
