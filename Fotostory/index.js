let id = setInterval(diashow, 5000);
let bildNr = 1;

function diashow() {
    bildNr++;
    if (bildNr > 8) bildNr = 1;

    document.getElementById("images").src = "pictures/Bild" + bildNr + ".jpg";
}