/*
##################################################
                    CONFIG
##################################################
*/

// Loader path
var loaders_path = "../loaders/";
var loader_image = "energy";

// Message to display after the content loader
var loader_text = false;
var loader_text_content = "";

// Loader hide animation duration after all content loaded (default 2s)
var loader_duration = 1;

/*
##################################################
                    ENGINE
##################################################
*/

var overlay = document.createElement("div");
overlay.setAttribute("id", "slOverlay");
$("body")[0].appendChild(overlay);

var loader = document.createElement("img");
loader.setAttribute("id", "slLoader");
loader.setAttribute("src", loaders_path + loader_image + ".svg");
//loader.setAttribute("class", "animated jackInTheBox");
$("body")[0].appendChild(loader);

overlay.style.transition = "opacity " + loader_duration + "s" + " ease-in-out 0s";
loader.style.transition = "opacity " + loader_duration / 2 + "s" + " ease-in-out 0s";

$('*').waitForImages(true).done(function() {
    
    alert("IMAGE LOADED");

    overlay.style.opacity = 0;
    loader.style.opacity = 0;

    setTimeout(function () {
        overlay.style.display = "none";
        loader.style.display = "none";
    }, loader_duration * 1000);
});