# simpleLoader
A simple JS resource to add a loader on your website.

## Preview
*coming soon*

## Installation

Link the css sheet
```html
<link rel="stylesheet" type="text/css" href="AmethystLoader/AmethystLoader.css" />
```

Link waitForImages
```html
<script src="AmethystLoader/waitForImages/dist/jquery.waitforimages.min.js">
```

Link AmethystLoader script
```html
<script src="AmethystLoader.js">
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
