export default class Cliente {
    private _cedula: string = "";
    private _tipoPlan: string = "";

    constructor(cedula: string, tipoPlan: string) {
        this.cedula = cedula;
        this.tipoPlan = tipoPlan;
    }

    set cedula(c: string) {
        this._cedula = c;
    }

    get cedula(): string {
        return this._cedula;
    }

    set tipoPlan(tP: string) {
        this._tipoPlan = tP;
    }

    get tipoPlan(): string {
        return this._tipoPlan;
    }

    serviciosConexion(): number {
        if(this.tipoPlan == "A") {
            return 10*3/100
        } else if(this.tipoPlan == "B") {
            return 10*5/100
        } else {
            return 0
        }
    }

    totalPagar(): number {
        if(this.tipoPlan == "A") {
            return 3 + this.serviciosConexion()
        } else if(this.tipoPlan == "B") {
            return 5 + this.serviciosConexion()
        } else if( this.tipoPlan == "C") {
            return 10
        }
        else {
            return 0
        }
    }
}