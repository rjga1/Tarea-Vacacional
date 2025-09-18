export default class Cl_Pasajero {
    private _nombre: string = "";
    private _tipoPago: number = 0;

constructor(n:string , tP: number) {
    this._nombre = n;
    this._tipoPago = tP;
}
set nombre(n:string ) {
    this._nombre = n;
}
get nombre(): string {
    return this._nombre;
}
set tipoPago(tP: number) {
    this._tipoPago = tP;
}
get tipoPago(): number {
    return this._tipoPago;
}
montoPasaje():number {          /* 1= Bolívares. 2= Dólares */
    if(this.tipoPago == 1) {
        return 40;
    }
    else if (this.tipoPago == 2) {
        return 1;
    } else return 0;
}
























    
}