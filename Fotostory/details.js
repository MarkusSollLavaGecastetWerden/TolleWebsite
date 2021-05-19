window.addEventListener("load", load);
window.addEventListener("load", getExif);

let planung = {
    becher: {
        zeit: 30,
        iso: 100,
    },
    donau: {
        zeit: 30,
        iso: 100,
    },
    ubahn: {
        zeit: 1,
        iso: 100,
    },
    prater: {

    }
};

function load() {
    document.getElementById("pic1").addEventListener("onclick", changePic1);
}

function changePic1() {
    window.alert();
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