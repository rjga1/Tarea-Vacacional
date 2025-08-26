export default class Cl_Cliente {
    private _nombre: string = "";
    private _billete: number = 0;
    private _cambio50: number = 0;
    private _cambio20: number = 0;
    private _cambio10: number = 0;

    constructor(nombre: string, billete: number, cambio50: number, cambio20: number, cambio10: number) {
        this.nombre = nombre;
        this.billete = billete;
        this.cambio50 = cambio50;
        this.cambio20 = cambio20;
        this.cambio10 = cambio10;
    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }
    get nombre(): string {
        return this._nombre;
    }
    set billete(billete: number) {
        this._billete = billete;
    }
    get billete(): number {
        return this._billete;
    }
    set cambio50(cambio50: number) {
        this._cambio50 = cambio50;
    }
    get cambio50(): number {
        return this._cambio50;
    }
    set cambio20(cambio20: number) {
        this._cambio20 = cambio20;
    }
    get cambio20(): number {
        return this._cambio20;
    }
    set cambio10(cambio10: number) {
        this._cambio10 = cambio10;
    }
    get cambio10(): number {
        return this._cambio10;
    }
    cantBilletesDevueltos(): number {
        return this.cambio50 + this.cambio20 + this.cambio10;
    }

}