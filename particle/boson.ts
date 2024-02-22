class Particle1 {
    name: string
    quantumNumber: number
    constructor(name: string, quantity: number) {
        this.name = name
        this.quantity = quantity
    }
    sameStateParticles: Particle1[]
    transitionState(newState: number): void {
        console.log(`${this.name} transitioned to state${newState}`);
        this.quantity = newState
    }
}
class Boson extends Particle1 {
    sameStateParticles: Particle1[] = []
constructor(name: string, quantity: number) {
        super(name, quantumNumber)
    }
    occupySameState(anotherBoson: Boson): void {
        this.transitionState(anotherBoson.quantity); // Use the method
        this.sameStateParticles.push(anotherBoson);
        console.log(`${this.name} and ${anotherBoson.name} are now in the same state.`);
    }
}
const photon1 = new Boson('Photon 1', 1)
const photon2 = new Boson('Photon 2', 1)
photon1.occupySameState(photon2);
