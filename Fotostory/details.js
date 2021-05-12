window.addEventListener("load", load);
window.addEventListener("load", getExif);


function load() {
    document.getElementById("pic1").addEventListener("onclick", changePic1);
}

function changePic1() {
}

function getExif() {
    var img1 = document.getElementById("pic1");
    EXIF.getData(img1, function() {
        var make = EXIF.getTag(this, "Make");
        var model = EXIF.getTag(this, "Model");
        var makeAndModel = document.getElementById("txt");
            makeAndModel.innerHTML = `${make} ${model}`;
    });
}