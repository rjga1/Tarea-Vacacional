import Cliente from "./Cl_Cliente.js";

export default class Agencia {
    private contPlanes: number = 0;
    private contPlanA: number = 0;
    private contPlanB: number = 0;
    private contPlanC: number = 0;
    private mayor: number = 0;
    private auxServicioMasConsumido: string = "";

    constructor() {
        this.contPlanes = 0;
        this.contPlanA = 0;
        this.contPlanB = 0;
        this.contPlanC = 0;
        this.mayor = 0;
        this.auxServicioMasConsumido = "";
    }

    procesarCliente(c: Cliente): void {
        this.contPlanes++
        if(c.tipoPlan == "A") {
            this.contPlanA++
        } else if(c.tipoPlan == "B") {
            this.contPlanB++
        } else if(c.tipoPlan == "C") {
            this.contPlanC++
        }

        if(this.contPlanA > this.mayor) {
            this.mayor = this.contPlanA
            this.auxServicioMasConsumido = "Plan A"
        } if(this.contPlanB > this.mayor) {
            this.mayor = this.contPlanB
            this.auxServicioMasConsumido = "Plan B"
        } if(this.contPlanC > this.mayor) {
            this.mayor = this.contPlanC
            this.auxServicioMasConsumido = "Plan C"
        } if(this.contPlanA == this.contPlanB && this.contPlanA > this.mayor) {
            this.mayor = this.contPlanA
            this.auxServicioMasConsumido = "Plan A y Plan B"
        } if(this.contPlanA == this.contPlanC && this.contPlanA > this.mayor) {
            this.mayor = this.contPlanA
            this.auxServicioMasConsumido = "Plan A y Plan C"
        } if(this.contPlanB == this.contPlanC && this.contPlanB > this.mayor) {
            this.mayor = this.contPlanB
            this.auxServicioMasConsumido = "Plan B y Plan C"
        } if(this.contPlanB == this.contPlanC && this.contPlanA == this.contPlanC) {
            this.mayor = this.contPlanB
            this.auxServicioMasConsumido = "Plan B, Plan C y Plan A"
        }
    }

    porcentajeSinServicioConexion(): number {
        if(this.contPlanes > 0) {
            return this.contPlanC*100/this.contPlanes;
        } else{
            return 0
        }
    }

    planFavorito(): string {
        return this.auxServicioMasConsumido;
    }
}