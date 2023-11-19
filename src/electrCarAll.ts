import { parking, Parking } from "./index";
import { KIA, Lexus, Tesla } from "./classes";

const electrCarAll: NodeListOf<HTMLElement> = document.querySelectorAll(".electrCar");
const electrCarlar1: HTMLDListElement = document.querySelector(".electrCarlar1")!;

function isParkingFull() {
	return electrCarlar1.children.length === 2;
}

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

	const electrCarAll = new Tesla(name, 50000);
	parking.enterCar(electrCarAll);

	setTimeout(() => {
		parking.logoutCar(electrCarAll.getId());
		console.log("-----------");
	}, 1000);

	const h1: HTMLParagraphElement = document.createElement("h1");
	h1.innerText = `${name} `;
	h1.className = "gazcar";
	electrCarlar1.appendChild(h1);
}
