import { parking } from "./index";

const electrCarAll: NodeListOf<HTMLElement> = document.querySelectorAll(".electrCar");
const electrCarlar1: HTMLDListElement = document.querySelector(".electrCarlar1")!;

function boshqajoyyoq() {
	if (electrCarlar1.children.length === 2) {
		console.log("Parking is full ❌");
		return false;
	}
	return true;
}

electrCarAll.forEach((gaz) => {
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
	electrCarlar1.appendChild(h1);
}