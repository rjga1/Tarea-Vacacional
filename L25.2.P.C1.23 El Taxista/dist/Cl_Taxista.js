export default class Cl_Taxista {
    _cantidadBolivares = 0;
    _cantidadDolares = 0;
    cntPasajerosBolivares = 0;
    cntCaramelos = 0;
    auxNombreCaramelo = [];
    acPagoBolivares = 0;
    acPagoDolares = 0;
    cntPasajeros = 0;
    constructor(cB, cD) {
        this._cantidadBolivares = cB;
        this._cantidadDolares = cD;
    }
    set cantidadBolivares(cB) {
        this._cantidadBolivares = +cB;
    }
    get cantidadBolivares() {
        return this._cantidadBolivares;
    }
    set cantidadDolares(cD) {
        this._cantidadDolares = +cD;
    }
    get cantidadDolares() {
        return this._cantidadDolares;
    }
    procesarPasajero(p) {
        if (p.tipoPago == 1) { /* 1= Bolívares. 2= Dólares */
            this.acPagoBolivares += p.montoPasaje();
            this.cntPasajerosBolivares++;
        }
        else if (p.tipoPago == 2) { /* 1= Bolívares. 2= Dólares */
            this.acPagoDolares += p.montoPasaje();
            this.auxNombreCaramelo.push(p.nombre);
            this.cntCaramelos++;
        }
        this.cntPasajeros++;
    }
    nombrePasajeroCaramelo() {
        return this.auxNombreCaramelo.join(', ');
    }
    totalDolares() {
        return this.cantidadDolares + this.acPagoDolares;
    }
    totalBolivares() {
        return this.cantidadBolivares + this.acPagoBolivares;
    }
    cantidadCaramelosRepartidos() {
        return this.cntCaramelos;
    }
    promedioPasajerosBolivares() {
        if (this.cntPasajeros > 0) {
            return (this.cntPasajerosBolivares / this.cntPasajeros) * 100;
        }
        else
            return 0;
    }
}
