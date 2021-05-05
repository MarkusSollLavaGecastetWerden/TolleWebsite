const id = setInterval(diashow, 5000);
a();

function a() {
    while (true) {
        window.alert("Es ist " + new Date().getDate());
    }
}

function diashow() {
    document.getElementsByClassName("images").src = "pictures/Bild3.jpg";
    document.getElementsByClassName("details").innerHTML = "Moin moin meine meisters!";
}

//Commit