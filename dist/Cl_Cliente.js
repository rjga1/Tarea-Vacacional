export default class Cliente {
    constructor(cedula, tipoPlan) {
        this._cedula = "";
        this._tipoPlan = "";
        this.cedula = cedula;
        this.tipoPlan = tipoPlan;
    }
    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this._cedula;
    }
    set tipoPlan(tP) {
        this._tipoPlan = tP;
    }
    get tipoPlan() {
        return this._tipoPlan;
    }
    serviciosConexion() {
        if (this.tipoPlan == "A") {
            return 10 * 3 / 100;
        }
        else if (this.tipoPlan == "B") {
            return 10 * 5 / 100;
        }
        else {
            return 0;
        }
    }
    totalPagar() {
        if (this.tipoPlan == "A") {
            return 3 + this.serviciosConexion();
        }
        else if (this.tipoPlan == "B") {
            return 5 + this.serviciosConexion();
        }
        else if (this.tipoPlan == "C") {
            return 10;
        }
        else {
            return 0;
        }
    }
}
