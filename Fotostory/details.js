window.addEventListener("load", getExif);

function getExif() {
    var img1 = document.getElementById("pic1");
    var txt = EXIF.getData(img1, function() {
        var make = EXIF.getTag(this, "Make");
        var model = EXIF.getTag(this, "Model");
        var makeAndModel = document.getElementById("txt");
            makeAndModel.innerHTML = `${make} ${model}`;
    });
}