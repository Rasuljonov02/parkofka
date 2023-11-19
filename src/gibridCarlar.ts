import { parking, Parking } from "./index";
import { KIA, Lexus } from "./classes";

const gibridCar: NodeListOf<HTMLElement> = document.querySelectorAll(".gibridCar");
const gibridCarlar1: HTMLDListElement = document.querySelector(".gibridCarlar1")!;

function isParkingFull() {
	return gibridCarlar1.children.length === 2;
}

gibridCar.forEach((gaz) => {
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

	const gibridCar = new KIA(name, 50000);
	parking.enterCar(gibridCar);

	setTimeout(() => {
					parking.logoutCar(gibridCar.getId());
					console.log("-----------");
	}, 1000);

	const h1: HTMLParagraphElement = document.createElement("h1");
	h1.innerText = `${name} `;
	h1.className = "gazcar";
	gibridCarlar1.appendChild(h1);
}
