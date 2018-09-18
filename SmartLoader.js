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
loader.classList.add("animated jackInTheBox");
overlay.appendChild(loader);


overlay.style.display = "flex";
overlay.style.position = "absolute";
overlay.style.width = "100vw";
overlay.style.height = "100vh";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";

overlay.style.backgroundColor = "white";
overlay.style.transition = "opacity " + loader_duration + "s" + " ease-in-out 0s";
loader.style.transition = "opacity " + loader_duration / 2 + "s" + " ease-in-out 0s";



$('*').waitForImages().done(function () {

    setTimeout(function () {
        overlay.style.opacity = 0;
        loader.style.opacity = 0;

        setTimeout(function () {
            overlay.style.display = "none";
            loader.style.display = "none";
        }, loader_duration);

    }, 2000);
});