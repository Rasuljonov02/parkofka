import "./gibridCarlar";
import "./electrCarAll";

import { parking, Parking } from "./index";
import { KIA, Lexus, Tesla } from "./classes";

const electrCarAll: NodeListOf<HTMLElement> = document.querySelectorAll(".gazcar");
const electrCarlar11: HTMLDListElement = document.querySelector(".gazCarlar1")!;

electrCarAll.forEach((gaz) => {
	gaz.addEventListener("click", () => {
		const gazValue = gaz.textContent?.trim();
		if (gazValue && !isParkingFull()) {
			parchiz(gazValue);
			gaz.remove();
			console.log(gazValue);
		}
	});
});

function parchiz(name: string) {
	if (isParkingFull()) {
		console.log("Parking is full ❌");
		return;
	}

	const electrCar = new Tesla(name, 50000);
	parking.enterCar(electrCar);

	const h1: HTMLParagraphElement = document.createElement("h1");
	h1.className = "gazcarchizish";
	h1.dataset.carId = electrCar.getId();
	electrCarlar11.appendChild(h1);

	// Start timer
	let tamer = 0;
	const updateTimer = setInterval(() => {
		tamer++;
		const minutes = Math.floor(tamer / 60);
		const seconds = tamer % 60;
		const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
		h1.innerText = `${name} - Parked for ${formattedTime}`;
	}, 1000);
	const gazcarchizish: NodeListOf<HTMLElement> = document.querySelectorAll(".gazcarchizish");

	gazcarchizish.forEach((gap) => {
		gap.addEventListener("click", () => {
			const carId = gap.dataset.carId;
			if (carId !== undefined) {
				clearInterval(updateTimer);
				parking.logoutCar(carId);
				h1.innerText = `${name} - Logged Out `;
				gap.remove();
				console.log("-----------");
			} else {
				console.error("Car ID is undefined");
			}
		});
	});
}

const electrCarlar1: NodeListOf<HTMLElement> = document.querySelectorAll(".gazcarchizish")!;
function isParkingFull() {
	return electrCarlar11.children.length === 2;
}
