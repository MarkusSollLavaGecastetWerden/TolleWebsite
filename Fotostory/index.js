window.addEventListener("load", load)

let id = setInterval(diashow, 5000);
let bildNr = 1;

function load() {
    document.getElementById("skipLeft").addEventListener("click", skipLeft);
    document.getElementById("skipRight").addEventListener("click", skipRight);
}

function diashow() {
    bildNr++;
    if (bildNr > 8) bildNr = 1;

    document.getElementById("images").src = "pictures/Bild" + bildNr + ".jpg";
}

function skipLeft() {
    bildNr--;
    if (bildNr < 1) bildNr = 8;

    document.getElementById("images").src = "pictures/Bild" + bildNr + ".jpg";
}

function skipRight() {
    bildNr++;
    if (bildNr > 8) bildNr = 1;

    document.getElementById("images").src = "pictures/Bild" + bildNr + ".jpg";
}