window.addEventListener("load", load);
//window.addEventListener("load", getExif);

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

let wirklichKeit = {
    "becher": {
        "zeit": 300,
        "iso": 32,
        "blende": "groß",
    },
    "donau": {
        "zeit": 1500,
        "iso": 100,
        "blende": "mittel",
    },
    "ubahn": {
        "zeit": 4,
        "iso": 100,
        "blende": "klein",
    },
    "prater": {
        "zeit": 180,
        "iso": 50,
        "blende": "mittel",
    },
    "gloriette": {
        "zeit": 750,
        "iso": 50,
        "blende": "mittel",
    },
    "innenstadt": {
        "zeit": 250,
        "iso": 50,
        "blende": "mittel",
    }
};

let fotos = ["becher", "becher", "donau", "ubahn", "prater", "gloriette", "gloriette", "innenstadt"];
let state = [];
let change = [];

let oemo = false;

let map = [0, 1, 1, 3, 4, 5, 7, 7, 8];

function load() {
    for (let i = 1; i <= 8; i++) {
        state[i] = [false, false];
        document.getElementById("cont" + i).addEventListener("mouseover", () => {
            if (change[i]) {
                change[i] = false;
                return;
            }
            if (state[i][0]) return;
            console.log("hover " + i);
            document.getElementById("cont" + i).innerHTML = generateText(i);
            state[i][0] = true;
        });
        document.getElementById("cont" + i).addEventListener("mouseout", () => {
            if (!state[i][0]) return;
            if (change[i]) return;
            console.log("nohover " + i);
            document.getElementById("cont" + i).innerHTML = '<img src="pictures/Bild' + i + '.jpg" id="pic' + i + '">';
            state[i][0] = false;
        });
        document.getElementById("cont" + i).addEventListener("mousedown", () => {
            if (state[i][1]) return;
            console.log("down " + i);
            document.getElementById("cont" + i).innerHTML = '<img src="Plan/bild' + map[i] + '.png" id="pic' + i + '">';
            state[i][1] = true;
            change[i] = true;
        });
        document.getElementById("cont" + i).addEventListener("mouseup", () => {
            if (!state[i][1]) return;
            console.log("up " + i);
            document.getElementById("cont" + i).innerHTML = generateText(i);
            state[i][1] = false;
            change[i] = false;
        });
        document.getElementById("pi").addEventListener("mousedown", () => {
            if (oemo) return;
            window.open("https://oemo.at/");
            oemo = true;
        });
        document.getElementById("pi").addEventListener("mouseup", () => {
            oemo = false;
        });
    }
}

function generateText(index) {
    index = index - 1;
    
    let text = "";
    let data = planung[fotos[index]];
    text += "<h1>Planung</h1>";
    text += "Belichtungszeit: 1/" + data.zeit + "<br>";
    text += "ISO: " + data.iso + "<br>";
    text += "Blende: " + data.blende + "<br>";

    data = wirklichKeit[fotos[index]];
    text += "<h1>Realität</h1>";
    text += "Belichtungszeit: 1/" + data.zeit + "<br>";
    text += "ISO: " + data.iso + "<br>";
    text += "Blende: " + data.blende + "<br>";
    return text;
}

function getExif() {
    var img1 = document.getElementById("pic1");
    alert(EXIF.getTag(img1, "ExposureTime"));
    EXIF.getData(img1, function() {
        var make = EXIF.getTag(this, "Make");
        var model = EXIF.getTag(this, "Model");
        var makeAndModel = document.getElementById("cont1");
            makeAndModel.innerHTML = `${make} ${model}`;
    });
}