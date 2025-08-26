export default class Cl_Cliente {
    constructor(nombre, billete, cambio50, cambio20, cambio10) {
        this._nombre = "";
        this._billete = 0;
        this._cambio50 = 0;
        this._cambio20 = 0;
        this._cambio10 = 0;
        this.nombre = nombre;
        this.billete = billete;
        this.cambio50 = cambio50;
        this.cambio20 = cambio20;
        this.cambio10 = cambio10;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set billete(billete) {
        this._billete = billete;
    }
    get billete() {
        return this._billete;
    }
    set cambio50(cambio50) {
        this._cambio50 = cambio50;
    }
    get cambio50() {
        return this._cambio50;
    }
    set cambio20(cambio20) {
        this._cambio20 = cambio20;
    }
    get cambio20() {
        return this._cambio20;
    }
    set cambio10(cambio10) {
        this._cambio10 = cambio10;
    }
    get cambio10() {
        return this._cambio10;
    }
    cantBilletesDevueltos() {
        return this.cambio50 + this.cambio20 + this.cambio10;
    }
}
