window.addEventListener("load", load);
window.addEventListener("load", getExif);

let planung = {
    "becher": {
        "zeit": 30,
        "iso": 100,
    },
    "donau": {
        "zeit": 30,
        "iso": 100,
    },
    "ubahn": {
        "zeit": 1,
        "iso": 100,
    },
    "prater": {
        "zeit": 30,

    }
};

function load() {
    for (let i = 1; i <= 8; i++) {
        document.getElementById("cont" + i).addEventListener("mouseover", () => {
            document.getElementById("cont" + i).innerHTML = "This is a test!";
        });
        document.getElementById("cont" + i).addEventListener("mouseout", () => {
            document.getElementById("cont" + i).innerHTML = '<img src="pictures/Bild' + i + '.jpg" id="pic' + i + '">';
        });
    }
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