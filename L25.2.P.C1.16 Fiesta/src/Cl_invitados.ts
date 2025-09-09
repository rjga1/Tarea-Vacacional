export default class Cl_invitados{
    private _nombre: string = "";
    private _cantCerv: number = 0;
    private _cantHamb: number = 0;

    constructor(nombre:string, cantCerv:number, cantHamb:number){
        this.nombre = nombre;
        this.cantCerv = cantCerv;
        this.cantHamb = cantHamb;
    }
    set nombre(nombre:string){
        this._nombre = nombre;
    }
    get nombre():string{
        return this._nombre;
    }
    set cantCerv(cantCerv:number){
        this._cantCerv = +cantCerv;
    }
    get cantCerv():number{
        return this._cantCerv;
    }
    set cantHamb(cantHamb:number){
        this._cantHamb = +cantHamb;
    }
    get cantHamb():number{
        return this._cantHamb;
    }
    cantProd():number{
        return this.cantCerv + this.cantHamb;
    }
}