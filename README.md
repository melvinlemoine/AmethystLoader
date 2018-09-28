# AmethystLoader
A simple JS library to add a loader on your website.

[demo](http://projets.melvin-lemoine.me/AmethystLoader/demo/)


## Installation

```HTML

<!--Link the css sheet -->
<link rel="stylesheet" type="text/css" href="AmethystLoader/AmethystLoader.css" />


<!- -Link waitForImages -->
<script src="AmethystLoader/waitForImages/dist/jquery.waitforimages.min.js">

<!-- Link fontFaceObserver -->
<script src="AmethystLoader/fontfaceobserver/fontfaceobserver.js">

<!-- Link AmethystLoader script -->
<script src="AmethystLoader.js">

<!-- Initialize the Loader -->
<script>
AmethystLoader(icon_folder, icon);
</script>

```

Exemple
```HTML
<script>
AmethystLoader("AmethystLoader/loaders/", "gears.svg");
</script>
```

And.... It's done !

## Configuration

Fill the loaders folder path
```JS
var loaders_path = "AmethystLoader/loaders/";
```
Select the loading icon (with extension)
```JS
var loader_image = "gears.svg";
```
if you want a message to appear after loading the loader, set to true.
```JS
var loader_text = false;
```
Fill the message
```JS
var loader_text_content = "This is the message !";
```

## Resources
Visit [loading.io](https://loading.io) to get some loaders !
