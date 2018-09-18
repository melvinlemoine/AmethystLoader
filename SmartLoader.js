/*
##################################################
                    CONFIG
##################################################
*/

// Loader path
var loader_image_path = "";

// Message to display after the content loader
var loader_text = false;
var loader_text_content = "";

// Loader hide animation duration after all content loaded (default 2s)
var loader_duration = 2;

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
loader.setAttribute("src", "../loaders/gears.svg");
loader.setAttribute("class", "animated jackInTheBox");
overlay.appendChild(loader);

overlay.style.transition = "opacity " + loader_duration + "s" + " ease-in-out 2s";
loader.style.transition = "opacity " + loader_duration / 2 + "s" + " ease-in-out 1s";

$('*').waitForImages().done(function () {
        overlay.style.opacity = 0;
        loader.style.opacity = 0;

        setTimeout(function () {
            overlay.style.display = "none";
            loader.style.display = "none";
        }, loader_duration * 2000);

});