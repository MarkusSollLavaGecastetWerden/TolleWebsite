window.addEventListener("load", load);
//window.addEventListener("resize", resize);

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

let before;
let after = "<section class='container'><p id='skipLeft'><</p><p id='skipRight'>></p><br><img src='pictures/Bild" + bildNr + ".jpg' id='images'/></section>";

function resize() {
    var r = document.querySelector('.container');
    size = r.style.setProperty("--propertie", "column");
    console.log("resize");
}