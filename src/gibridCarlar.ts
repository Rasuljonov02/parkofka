import { parking } from "./index";

const gibridCar: NodeListOf<HTMLElement> = document.querySelectorAll(".gibridCar");
const gibridCarlar1: HTMLDListElement = document.querySelector(".gibridCarlar1")!;

function boshqajoyyoq() {
	if (gibridCarlar1.children.length === 2) {
		console.log("Parking is full ❌");
		return false;
	}
	return true;
}

gibridCar.forEach((gaz) => {
	gaz.addEventListener("click", () => {
		const gazValue = gaz.textContent?.trim();
		if (gazValue) {
			if (boshqajoyyoq()) {
				parchiz(gazValue);
				gaz.remove();
				console.log(gazValue);
			}
		}
	});
});

function parchiz(name: string) {
	if (!boshqajoyyoq()) {
		return;
	}

	const h1: HTMLParagraphElement = document.createElement("h1");
	h1.innerText = `${name} `;
	h1.className = "gazcar";
	gibridCarlar1.appendChild(h1);
}