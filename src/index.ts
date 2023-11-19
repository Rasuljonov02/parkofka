import "./main.css";
import "./chiz.ts";

import { BYD, Car, KIA, Lexus, Tesla } from "./classes";
import { capacity, pricing } from "./data";
import { Capacity, Pricing } from "./types";

export class Parking<T extends Car> {
	public cars: T[] = [];
	public profit: number = 0;
	private id = 1;

	constructor(public name: string, public capacity: Capacity, public pricing: Pricing) {}

	enterCar(car: T) {
		const isAreaExist = this.capacity[car.type] !== 0;
		if (!isAreaExist) console.error("Parking is full ❌");

		this.capacity[car.type]--;
		car.setId(`${this.id++}`);
		car.setEnterTime(new Date());
		this.cars.push(car);
	}

	logoutCar(carId: string) {
		const carIdx = this.cars.findIndex((c) => c.getId() === carId);
		// if (carIdx === -1)  console.error(`Car not entered with id ${carId}`);

		const car = this.cars[carIdx];
		const profitOfThisCar = this.calculateProfitThisCar(car);
		this.profit += profitOfThisCar;

		this.capacity[car.type]++;
		this.cars.splice(carIdx, 1);
	}
	calculateProfitThisCar(car: T): number {
		if (!car) {
						console.error("Car is undefined");
						return 0;
		}

		const enterTime = car.getEnterTime();
		if (!enterTime) {
						console.error("Enter time is undefined for the car");
						return 0;
		}

		const diff = new Date().getSeconds() - enterTime.getSeconds();

		console.log(`${diff} seconds`);
		const priceOfPerSecond = 10;
		const total = diff * priceOfPerSecond;
		console.log(`${total}$ earned`);

		return total;
}


	calculateTotalProfit() {
		return this.profit;
	}
}

export const parking = new Parking("Sebzor Parking", capacity, pricing);


// const kia = new KIA("kia k5", 50000);


// const lada = new BYD("BYD", 50000);
// // console.log(lada);
// parking.enterCar(lada);
// setTimeout(() => {
// 	parking.logoutCar(lada.getId());
// }, 1000);
// console.log("-----------");

// const lala = new Lexus("Tesla", 50000);
// // console.log(lala);
// parking.enterCar(lala);
// setTimeout(() => {
// 	parking.logoutCar(lala.getId());
// }, 1000);
// console.log("-----------");

// const lala2 = new Lexus("Tesla2", 50000);
// // console.log(lala2);
// parking.enterCar(lala2);
// setTimeout(() => {
// 	parking.logoutCar(lala2.getId());
// }, 1000);
