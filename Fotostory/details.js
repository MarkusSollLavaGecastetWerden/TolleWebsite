window.addEventListener("load", getExif);

document.getElementById("pic1").addEventListener("click", changePic1);

window.addEventListener("click", changePic1);

function changePic1() {
    window.alert();
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