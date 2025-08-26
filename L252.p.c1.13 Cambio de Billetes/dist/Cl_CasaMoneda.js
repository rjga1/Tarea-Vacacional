export default class Cl_CasaMoneda {
    constructor(caja50, caja20, caja10) {
        this._caja50 = 0;
        this._caja20 = 0;
        this._caja10 = 0;
        this.caja50 = caja50;
        this.caja20 = caja20;
        this.caja10 = caja10;
        this.caja100 = 0;
        this.acMontoTotalCambiado = 0;
    }
    set caja50(caja50) {
        this._caja50 = caja50;
    }
    get caja50() {
        return this._caja50;
    }
    set caja20(caja20) {
        this._caja20 = caja20;
    }
    get caja20() {
        return this._caja20;
    }
    set caja10(caja10) {
        this._caja10 = caja10;
    }
    get caja10() {
        return this._caja10;
    }
    procesarCliente(c) {
        this.acMontoTotalCambiado += c.billete;
        switch (c.billete) {
            case 100:
                this.caja100++;
                break;
            case 50:
                this.caja50++;
                break;
            case 20:
                this.caja20++;
                break;
        }
        this.caja50 -= c.cambio50;
        this.caja20 -= c.cambio20;
        this.caja10 -= c.cambio10;
    }
    montoTotalCambiado() {
        return this.acMontoTotalCambiado;
    }
    billetesDisponibles() {
        return `Quedaron ${this.caja100} billetes de $100 <br>
            Quedaron ${this.caja50} billetes de $50 <br>
            Quedaron ${this.caja20} billetes de $20 <br>
            Quedaron ${this.caja10} billetes de $10.`;
    }
}
