function AmethystLoader(loaders_folder, loader_image) {
  console.log("%cAmethystLoader launched", "color: white; background-color: black; padding: 10px");
  console.log("%cLoaders folder :" + " \"" + loaders_folder + "\"", "color: white; background-color: green; padding: 10px");
  console.log("%cLoaders image :" + " \"" + loader_image + "\"", "color: white; background-color: green; padding: 10px");

  var overlay = document.createElement("div");
  overlay.setAttribute("id", "slOverlay");
  $("body")[0].appendChild(overlay);

  var loader = document.createElement("embed");
  loader.setAttribute("id", "slLoader");
  loader.setAttribute("src", loaders_folder + loader_image);
  $("body")[0].appendChild(loader);
  loader.style.opacity = 1;

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