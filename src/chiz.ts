import { parking, Parking } from "./index";
import { capacity, pricing } from "./data";



import {  Car } from "./classes";

import "./electrCarAll";
import "./gibridCarlar";

const gazcarAll: NodeListOf<HTMLElement> = document.querySelectorAll(".gazcar");
const pushgazCarlar1: HTMLDListElement = document.querySelector(".gazCarlar1")!;

function isParkingFull() {
    if (pushgazCarlar1.children.length === 2) {
        console.log("Parking is full ❌");
        return true;
    }
    return false;
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
        return;
    }

    const parkingInstance = new Parking("Sebzor Parking", capacity, pricing);
    // const car = parkingInstance.getCarById(name);

    // if (car) {
    //     parkingInstance.enterCar(car);
    //     setTimeout(() => {
    //         parkingInstance.logoutCar(car.getId());
    //     }, 1000);
    //     console.log("-----------");

        const h1: HTMLParagraphElement = document.createElement("h1");
        h1.innerText = `${name} `;
        h1.className = "gazcar";
        pushgazCarlar1.appendChild(h1);
    }
// }


// class BYD implements Car {

// }
