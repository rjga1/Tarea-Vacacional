export default class Cl_Pasajero {
    _nombre = "";
    _tipoPago = 0;
    constructor(n, tP) {
        this._nombre = n;
        this._tipoPago = tP;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set tipoPago(tP) {
        this._tipoPago = tP;
    }
    get tipoPago() {
        return this._tipoPago;
    }
    montoPasaje() {
        if (this.tipoPago == 1) {
            return 40;
        }
        else if (this.tipoPago == 2) {
            return 1;
        }
        else
            return 0;
    }
}
