import Cl_Cliente from "./Cl_Cliente.js";

export default class Cl_CasaMoneda {
    private _caja50: number = 0;
    private _caja20: number = 0;
    private _caja10: number = 0;
    private caja100: number;
    private acMontoTotalCambiado: number;


    constructor(caja50: number, caja20: number, caja10: number) {
        this.caja50 = caja50;
        this.caja20 = caja20;
        this.caja10 = caja10;
        this.caja100 = 0;
        this.acMontoTotalCambiado = 0;
    }
    set caja50(caja50: number) {
        this._caja50 = caja50;
    }
    get caja50(): number {
        return this._caja50;
    }
    set caja20(caja20: number) {
        this._caja20 = caja20;
    }
    get caja20(): number {
        return this._caja20;
    }
    set caja10(caja10: number) {
        this._caja10 = caja10;
    }
    get caja10(): number {
        return this._caja10;
    }
    procesarCliente(c: Cl_Cliente): void {
        this.acMontoTotalCambiado += c.billete;
        switch (c.billete) {
            case 100: this.caja100++; break;
            case 50: this.caja50++; break;
            case 20: this.caja20++; break;
        }
        this.caja50 -= c.cambio50;
        this.caja20 -= c.cambio20;
        this.caja10 -= c.cambio10;

    }    
    montoTotalCambiado(): number {
        return this.acMontoTotalCambiado;
    }
    billetesDisponibles(): string {
        return `Quedaron ${this.caja100} billetes de $100 <br>
            Quedaron ${this.caja50} billetes de $50 <br>
            Quedaron ${this.caja20} billetes de $20 <br>
            Quedaron ${this.caja10} billetes de $10.`;
    }
        

}