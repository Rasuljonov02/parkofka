import { Car, KIA } from './classes';
import { capacity, pricing } from './data';
import { Capacity, Pricing } from './types';

class Parking<T extends Car> {
	public cars: T[] = [];
	public profit: number = 0;
	private id = 1;
	constructor(public name: string, public capacity: Capacity, public pricing: Pricing) {}

	enterCar(car: T) {
		const isAreaExist = this.capacity[car.type] !== 0;
		if (!isAreaExist) throw new Error('Parking is full ❌');

		this.capacity[car.type]--;
		car.setId(`${this.id++}`);
		car.setEnterTime(new Date());
		this.cars.push(car);
	}

	logoutCar(carId: string) {
		const carIdx = this.cars.findIndex((c) => c.getId() === carId);
		if (carIdx === -1) throw new Error(`Car not entered with id ${carId}`);

		const car = this.cars[carIdx];
		const profitOfThisCar = this.calculateProfitThisCar(car);
		this.profit += profitOfThisCar;

		this.capacity[car.type]++;
		this.cars.splice(carIdx, 1);
	}

	calculateProfitThisCar(car: T): number {
		const diff = new Date().getSeconds() - car.getEnterTime().getSeconds();
		const priceOfPerSecond = 10;
		const total = diff * priceOfPerSecond;
		return total;
	}

	calculateTotalProfit() {
		return this.profit;
	}
}

const parking = new Parking('Sebzor Parking', capacity, pricing);

const kia = new KIA('kia k5', 50000);
parking.enterCar(kia);
setTimeout(() => {
	parking.logoutCar(kia.getId());
}, 2000);
