window.addEventListener("load", load);
window.addEventListener("load", getExif);

function load() {
    /* ----------------------------- BILD 1 Hover Event ------------------------------------- */
    document.getElementById("cont1").addEventListener("mouseover", () => {
        document.getElementById("cont1").innerHTML = "This is a test!";
    });
    document.getElementById("cont1").addEventListener("mouseout", () => {
        document.getElementById("cont1").innerHTML = '<img src="pictures/Bild1.jpg" id="pic1">';
    });

    /* ----------------------------- BILD 2 Hover Event ------------------------------------- */
    document.getElementById("cont2").addEventListener("mouseover", () => {
        document.getElementById("cont2").innerHTML = "This is a test!";
    });
    document.getElementById("cont2").addEventListener("mouseout", () => {
        document.getElementById("cont2").innerHTML = '<img src="pictures/Bild2.jpg" id="pic2">';
    });

    /* ----------------------------- BILD 3 Hover Event ------------------------------------- */
    document.getElementById("cont3").addEventListener("mouseover", () => {
        document.getElementById("cont1").innerHTML = "This is a test!";
    });
    document.getElementById("cont3").addEventListener("mouseout", () => {
        document.getElementById("cont3").innerHTML = '<img src="pictures/Bild3.jpg" id="pic3">';
    });

    /* ----------------------------- BILD 4 Hover Event ------------------------------------- */
    document.getElementById("cont4").addEventListener("mouseover", () => {
        document.getElementById("cont4").innerHTML = "This is a test!";
    });
    document.getElementById("cont4").addEventListener("mouseout", () => {
        document.getElementById("cont4").innerHTML = '<img src="pictures/Bild4.jpg" id="pic4">';
    });

    /* ----------------------------- BILD 5 Hover Event ------------------------------------- */
    document.getElementById("cont5").addEventListener("mouseover", () => {
        document.getElementById("cont5").innerHTML = "This is a test!";
    });
    document.getElementById("cont5").addEventListener("mouseout", () => {
        document.getElementById("cont5").innerHTML = '<img src="pictures/Bild5.jpg" id="pic5">';
    });

    /* ----------------------------- BILD 6 Hover Event ------------------------------------- */
    document.getElementById("cont6").addEventListener("mouseover", () => {
        document.getElementById("cont6").innerHTML = "This is a test!";
    });
    document.getElementById("cont6").addEventListener("mouseout", () => {
        document.getElementById("cont6").innerHTML = '<img src="pictures/Bild6.jpg" id="pic6">';
    });

    /* ----------------------------- BILD 7 Hover Event ------------------------------------- */
    document.getElementById("cont7").addEventListener("mouseover", () => {
        document.getElementById("cont7").innerHTML = "This is a test!";
    });
    document.getElementById("cont7").addEventListener("mouseout", () => {
        document.getElementById("cont7").innerHTML = '<img src="pictures/Bild7.jpg" id="pic7">';
    });

    /* ----------------------------- BILD 8 Hover Event ------------------------------------- */
    document.getElementById("cont8").addEventListener("mouseover", () => {
        document.getElementById("cont8").innerHTML = "This is a test!";
    });
    document.getElementById("cont8").addEventListener("mouseout", () => {
        document.getElementById("cont8").innerHTML = '<img src="pictures/Bild8.jpg" id="pic8">';
    });
}

function getExif() {
    document.getElementById("data1").innerHTML = EXIF.getTag(this, "ExposureTime");
    var img1 = document.getElementById("pic1");
    EXIF.getData(img1, function() {
        var make = EXIF.getTag(this, "Make");
        var model = EXIF.getTag(this, "Model");
        var makeAndModel = document.getElementById("data1");
            makeAndModel.innerHTML = `${make} ${model}`;
    });
}