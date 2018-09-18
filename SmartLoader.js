/*
##################################################
                    CONFIG
##################################################
*/

var loader_image_path = "";
var loader_text = "";

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
overlay.appendChild(loader);


overlay.style.display = "flex";
overlay.style.position = "absolute";
overlay.style.width = "100vw";
overlay.style.height = "100vh";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";

overlay.style.backgroundColor = "white";
overlay.style.transition = "opacity 2s ease-in-out 0s";
loader.style.transition = "opacity 1s ease-in-out 0s";



$('*').waitForImages().done(function () {

    setTimeout(function () {
        overlay.style.opacity = 0;
        loader.style.opacity = 0;

        setTimeout(function () {
            overlay.style.display = "none";
            loader.style.display = "none";
        }, 2000)

    }, 500);
});