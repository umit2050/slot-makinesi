const slots = document.querySelectorAll(".slots");
const slotEkrani = document.querySelector(".slot-ekrani")
const slotMesaj = document.querySelector("#slot-mesaj");
const slot1 = document.querySelector("#slot1");
const slot2 = document.querySelector("#slot2");
const slot3 = document.querySelector("#slot3");

const slotArray = ["🪐", "🚀", "👽"];

let slotCevir = () => {
    let slotCode1 = slotArray[Math.floor(Math.random() * slotArray.length)];
    let slotCode2 = slotArray[Math.floor(Math.random() * slotArray.length)];
    let slotCode3 = slotArray[Math.floor(Math.random() * slotArray.length)];

    slot1.textContent = slotCode1;
    slot2.textContent = slotCode2;
    slot3.textContent = slotCode3;
    
    anim1 = "animation: flipInX; animation-duration: 2s; animation-iteration-count: 3";
    animStop = "animation-iteration-count: 0";

    if (slotCode1 == slotCode2 && slotCode2 == slotCode3 && slotCode1 == slotCode3) {
        slotMesaj.textContent = "😃 Kazandınız! ✨";
        slotMesaj.style = "animation: flash; animation-duration: 2s;";
        slotEkrani.style = "background-color: #EFFF94; border: 3px dotted tomato;";
        slot1.style = anim1;
        slot2.style = anim1;
        slot3.style = anim1;
    }
    else {
        slotMesaj.textContent = "🤔";
        slotMesaj.style = animStop;
        slotEkrani.style = "background-color: #FFF; border: 3px solid #eee;";
        slot1.style = animStop;
        slot2.style = animStop;
        slot3.style = animStop;
    }
}