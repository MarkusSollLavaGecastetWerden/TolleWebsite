window.addEventListener("load", load);
/*window.addEventListener("load", getExif);*/

let planung = {
    "becher": {
        "zeit": 30,
        "iso": 100,
        "blende": "groß",
    },
    "donau": {
        "zeit": 30,
        "iso": 100,
        "blende": "mittel",
    },
    "ubahn": {
        "zeit": 1,
        "iso": 100,
        "blende": "klein",
    },
    "prater": {
        "zeit": 30,
        "iso": 100,
        "blende": "mittel",
    },
    "gloriette": {
        "zeit": 30,
        "iso": 100,
        "blende": "mittel",
    },
    "innenstadt": {
        "zeit": 2,
        "iso": 100,
        "blende": "mittel",
    }
};

let wirklichKeit = [];

let fotos = ["becher", "becher", "donau", "ubahn", "prater", "gloriette", "gloriette", "innenstadt"];

function load() {
    for (let i = 1; i <= 8; i++) {
        document.getElementById("cont" + i).addEventListener("mouseover", () => {
            document.getElementById("cont" + i).innerHTML = generateText(i);
        });
        document.getElementById("cont" + i).addEventListener("mouseout", () => {
            document.getElementById("cont" + i).innerHTML = '<img src="pictures/Bild' + i + '.jpg" id="pic' + i + '">';
        });
    }
}

function generateText(index) {
    let text = "";
    let data = planung[fotos[index]];
    text += "<h1>Planung</h1>"
    text += "Belichtungszeit: 1/" + data.zeit + "<br>";
    text += "ISO: " + data.iso + "<br>";
    text += "Blende: " + data.blende + "<br>";

    data = wirklichKeit[index];
    text += "<h1>Realität</h1>"
    text += "Belichtungszeit: 1/" + data.zeit + "<br>";
    text += "ISO: " + data.iso + "<br>";
    text += "Blende: " + data.blende + "<br>";
    return text;
}

function getExif() {
    var img1 = document.getElementById("pic1");
    document.getElementById("pic1").innerHTML = EXIF.getTag(img1, "ExposureTime");
    EXIF.getData(img1, function() {
        var make = EXIF.getTag(this, "Make");
        var model = EXIF.getTag(this, "Model");
        var makeAndModel = document.getElementById("data1");
            makeAndModel.innerHTML = `${make} ${model}`;
    });
}