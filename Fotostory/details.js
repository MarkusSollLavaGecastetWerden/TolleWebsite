window.addEventListener("load", load);
window.addEventListener("load", getExif);

document.getElementById("pic1").addEventListener("click", changePic1);

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
        var makeAndModel = document.getElementById("txt");
            makeAndModel.innerHTML = `${make} ${model}`;
    });
}