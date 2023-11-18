import { CAR_TYPE } from './types';

export class Car {
	private id: string;
	private enterTime: Date;

	constructor(public name: string, public type: CAR_TYPE) {}

	setId(Id: string) {
		this.id = Id;
	}

	getId() {
		return this.id;
	}
	setEnterTime(enterTime: Date) {
		this.enterTime = enterTime;
	}

	getEnterTime() {
		return this.enterTime;
	}
}

export class ElectroCar extends Car {
	constructor(public name: string) {
		super(name, 'ELECTRO_CAR');
	}
}
export class PetrolCar extends Car {
	constructor(public name: string) {
		super(name, 'PETROL_CAR');
	}
}
export class HybridCar extends Car {
	constructor(public name: string) {
		super(name, 'HYBRID_CAR');
	}
}

export class BYD extends ElectroCar {
	constructor(name: string, public price: number) {
		super(name);
	}
}

export class Tesla extends ElectroCar {
	constructor(name: string, public price: number) {
		super(name);
	}
}

export class Lexus extends PetrolCar {
	constructor(name: string, public price: number) {
		super(name);
	}
}

export class KIA extends HybridCar {
	constructor(name: string, public price: number) {
		super(name);
	}
}
