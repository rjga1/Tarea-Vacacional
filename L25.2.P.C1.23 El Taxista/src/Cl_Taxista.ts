import Cl_Pasajero from "./Cl_Pasajero"

export default class Cl_Taxista {
    private _cantidadBolivares: number = 0;
    private _cantidadDolares: number = 0;
    private cntPasajerosBolivares: number = 0;
    private cntCaramelos: number = 0;
    private auxNombreCaramelo: string[] = [];
    private acPagoBolivares: number = 0;
    private acPagoDolares: number = 0;
    private cntPasajeros: number = 0;

constructor(cB:number, cD:number) {
    this._cantidadBolivares = cB;
    this._cantidadDolares = cD;
}
set cantidadBolivares(cB:number) {
    this._cantidadBolivares = +cB;
}
get cantidadBolivares(): number {
    return this._cantidadBolivares;
}
set cantidadDolares(cD:number) {
    this._cantidadDolares = +cD;
}
get cantidadDolares(): number {
    return this._cantidadDolares;
}
procesarPasajero(p:Cl_Pasajero): void {
    if(p.tipoPago == 1) {                   /* 1= Bolívares. 2= Dólares */
        this.acPagoBolivares += p.montoPasaje();
        this.cntPasajerosBolivares++;
    }
        else
    if (p.tipoPago == 2) {                  /* 1= Bolívares. 2= Dólares */
        this.acPagoDolares += p.montoPasaje();
        this.auxNombreCaramelo.push(p.nombre);
        this.cntCaramelos++;
    }
this.cntPasajeros++;    
}
nombrePasajeroCaramelo(): string  {
    return this.auxNombreCaramelo.join(', ')   ;
}
totalDolares(): number {
    return this.cantidadDolares + this.acPagoDolares;
}
totalBolivares(): number {
    return this.cantidadBolivares + this.acPagoBolivares;
}
cantidadCaramelosRepartidos(): number {
    return this.cntCaramelos;
}
promedioPasajerosBolivares(): number {
    if (this.cntPasajeros > 0) {
        return (this.cntPasajerosBolivares / this.cntPasajeros) * 100;
    } else return 0;
}
}