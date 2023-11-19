import { parking, Parking } from "./index";
import { Lexus } from "./classes";
import "./electrCarAll";
import "./gibridCarlar";

const gazcarAll: NodeListOf<HTMLElement> = document.querySelectorAll(".gazcar")!;
const pushgazCarlar1: HTMLDListElement = document.querySelector(".gazCarlar1")!;

function isParkingFull() {
    return pushgazCarlar1.children.length === 2;
}

gazcarAll.forEach((gaz) => {
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

    const lexusCar = new Lexus(name, 50000);
    parking.enterCar(lexusCar);

    setTimeout(() => {
        parking.logoutCar(lexusCar.getId());
        console.log("-----------");
    }, 1000);

    const h1: HTMLParagraphElement = document.createElement("h1");
    h1.innerText = `${name} `;
    h1.className = "gazcar";
    pushgazCarlar1.appendChild(h1);
}
