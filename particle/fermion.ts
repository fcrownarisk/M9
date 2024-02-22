
class Particle2 {
    name: string
    quantumNumber: number
    constructor(name: string, quantity: number) {
        this.name = name
        this.quantity = quantity
    }
    transitionState(newState: number): void {
        console.log(`${this.name} transitioned to state${newState}`)
        this.quantity = newState
    }
}
class Fermion extends Particle2 {
constructor(name: string, quantity: number) {
        super(name, quantity)
    }
    checkState(quantity: number): boolean {

        return Fermion.constructor(quantity)
    }
    occupyState(quantity: number): boolean {
        if (this.checkState(quantity)) {
            console.log('State is already occupied by another Fermion.')
            return false
        } else {
            this.quantumNumber = quantity;
            console.log(`${this.name} occupies state ${quantity}`)
            return true
        }
    }
}
const electron1 = new Fermion('Electron 1', 1)
const electron2 = new Fermion('Electron 2', 2)
electron1.transitionState(2)
electron2.occupyState(electron1.quantity)
