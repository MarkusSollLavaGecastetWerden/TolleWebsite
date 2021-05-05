var id = setInterval(diashow, 5000);

function diashow() {
    document.getElementsByClassName("images").src = "pictures/Bild3.jpg";
    document.getElementsByClassName("details").innerHTML = "Moin moin meine meisters!";
}

//Commit