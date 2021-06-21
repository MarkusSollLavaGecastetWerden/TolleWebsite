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

/*
Wird jetzt nicht mehr gebraucht
*/ 

/*
let wirklichKeit = {
    "becher": {
        "zeit": 300,
        "iso": 32,
        "blende": 2,
    },
    "donau": {
        "zeit": 150,
        "iso": 100,
        "blende": 1.5,
    },
    "ubahn": {
        "zeit": 500,
        "iso": 100,
        "blende": 2,
    },
    "prater": {
        "zeit": 180,
        "iso": 50,
        "blende": 1.9,
    },
    "gloriette": {
        "zeit": 250,
        "iso": 50,
        "blende": 2,
    },
    "innenstadt": {
        "zeit": 250,
        "iso": 50,
        "blende": 2.6,
    }
};
*/

let fotos = ["becher", "becher", "donau", "ubahn", "prater", "gloriette", "gloriette", "innenstadt"];
let state = [];
let change = [];

let oemo = false;

let map = [0, 1, 1, 3, 4, 5, 7, 7, 8];

let color = 0x000000;

function load() {
    for (let i = 1; i <= 8; i++) {
        state[i] = [false, false];
        document.getElementById("cont" + i).addEventListener("mouseout", () => {
            if (!state[i][0]) return;
            if (change[i]) return;
            console.log("nohover " + i);
            document.getElementById("cont" + i).innerHTML = '<img src="pictures/Bild' + i + '.jpg" id="pic' + i + '">';
            state[i][0] = false;
        });
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
    }
    document.getElementById("pi").addEventListener("mousedown", () => {
        if (oemo) return;
        window.open("https://oemo.at/");
        oemo = true;
    });
    document.getElementById("pi").addEventListener("mouseup", () => {
        oemo = false;
    });
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("w")[i].addEventListener("mouseover", () => {
            console.log("M");
            if (document.getElementsByClassName("w")[i].innerHTML == "W") {
                document.getElementsByClassName("w")[i].innerHTML = "M";
            } else {
               document.getElementsByClassName("w")[i].innerHTML = "W";
            }
        });
    }
    document.getElementById("chroma").addEventListener("click", () => {
        setInterval(diashow, 10);
    });
}

function diashow() {
    //console.log(color);
    color = (color + 1) % (0x1000000);
    document.getElementById("c").style.backgroundColor = "#" + color;
    document.getElementsByClassName("title")[0].style.color = "#" + (0x1000000 - color);
}

function generateText(index) {
    index = index - 1;
    
    let text = "";
    let data = planung[fotos[index]];
    text += "<h1>Planung</h1>";
    text += "Belichtungszeit: 1/" + data.zeit + "<br>";
    text += "ISO: " + data.iso + "<br>";
    text += "Blende: " + data.blende + "<br>";

    data = exifArray[index];
    console.log(data);
    console.log(exifArray);
    text += "<h1>Realität</h1>";
    if (data.ISO_Speed < 250) {
        text += "Belichtungszeit: 1/" + Math.round(1000 / data.ISO_Speed) + "s<br>";
    } else {
        text += "Belichtungszeit: " + data.ISO_Speed + "ms<br>";
    }
    text += "ISO: " + data.ISO + "<br>";
    text += "Blende: f/" + data.FocalLength + "<br>";
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


/*
Mit Hilfe von Stefan gelöst:
*/

let exifArray = [null, null, null, null, null, null, null, null];

const promise = new Promise((resolve) => {
    let interval = setInterval(() => {
        let finished = true;

        for (let i1 = 0; i1 < exifArray.length; i1++) {
            const it = exifArray[i1];
            if (it === null) {
                finished = false;
                let img = document.getElementById("pic" + (i1 + 1));
                if (img === null) {
                    let interval1 = setInterval(() => {
                        img = document.getElementById("pic" + (i1 + 1));
                        if (img != null) {
                            getExifData(img, exifArray, i1);
                            clearInterval(interval1);
                        }
                    }, 100);
                } else {
                    //console.log("Not null image " + (i1 + 1));
                    getExifData(img, exifArray, i1);
                }
            }
        }
        if (finished) {
            resolve(exifArray);
            clearInterval(interval);
        }
    }, 100)

});


promise.then(
    function (value) {
        //Hier darstellen
        const message = JSON.stringify(value);
        //window.alert(message);
        console.log(message);
        //document.getElementById("data1").innerHTML += value;
    }
);




function getExifData(img, exifArray, i) {
    EXIF.getData(img, function () {
            const make = EXIF.getTag(this, "Make");
            const model = EXIF.getTag(this, "Model");
            const ISO = EXIF.getTag(this, "ISOSpeedRatings");
            const ISO_SPEED = EXIF.getTag(this, "ExposureTime");
            const shutter_speed = EXIF.getTag(this, "ShutterSpeed");
            const LENGTH = EXIF.getTag(this, "FocalLength");
            const DIST = EXIF.getTag(this, "SubjectDistanceRange");
            exifArray[i] = {
                "Make": make,
                "Model": model,
                "ISO": ISO,
                "ISO_Speed": ISO_SPEED,
                "shutter": shutter_speed,
                "FocalLength": LENGTH,
                "Distance": DIST
            };
        }
    );
}