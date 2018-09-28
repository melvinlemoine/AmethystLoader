function AmethystLoader(loaders_folder, loader_image) {
  var overlay = document.createElement("div");
  overlay.setAttribute("id", "slOverlay");
  $("body")[0].appendChild(overlay);

  var loader = document.createElement("img");
  loader.setAttribute("id", "slLoader");
  loader.setAttribute("src", loaders_folder + loader_image);
  //loader.setAttribute("class", "animated jackInTheBox");
  $("body")[0].appendChild(loader);

  overlay.style.transition = "opacity " + 1 + "s" + " ease-in-out 0s";
  loader.style.transition = "opacity " + 1 / 2 + "s" + " ease-in-out 0s";

  $('*').waitForImages(true).done(function() {

    overlay.style.opacity = 0;
    loader.style.opacity = 0;

    setTimeout(function() {
      overlay.style.display = "none";
      loader.style.display = "none";
    }, 1000);
  });
}