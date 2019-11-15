//  BASE CLASS
abstract class Car {
    public description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}


// CONCRETE COMPONENT
class ModelX extends Car {
    public description = "Model X";

    public cost(): number {
        return 73000;
    }
}

// CONCRETE COMPONENT
class ModelY extends Car {
    public description = "Model Y";

    public cost(): number {
        return 77000;
    }

}

// DECORATOR CLASS
abstract class CarOptions extends Car {
    decoratedCar: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

// CONCRETE DECORATOR
class EnchancedAutoPilot extends CarOptions {
    decoratedCar: Car;

    constructor (car: Car) {
        super();
        this.decoratedCar = car;
    }
    
    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Enchanced AutoPilot';
    }

    public cost(): number {
        return this.decoratedCar.cost() + 5000;    
    }

}

// CONCRETE DECORATOR
class RearFacingSeats extends CarOptions {
    decoratedCar: Car;

    constructor (car: Car) {
        super();
        this.decoratedCar = car;
    }
    
    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Rear facing seats';
    }

    public cost(): number {
        return this.decoratedCar.cost() + 4000;    
    }

}

let myTesla = new ModelX();
myTesla = new RearFacingSeats(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());