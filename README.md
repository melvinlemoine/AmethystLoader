# AmethystLoader
A simple JS library to add a loader on your website :
until :

* Web fonts,
* Images,
* Background-images,

aren't loaded, the screen is white with an animated icon :

[demo](http://projets.melvin-lemoine.me/AmethystLoader/demo/)

## Preview
![preview](https://i.imgur.com/Q5GzByU.png)

## Installation

```HTML

<!-- Link the css sheet -->
<link rel="stylesheet" type="text/css" href="AmethystLoader/AmethystLoader.css" />


<!-- Link waitForImages -->
<script src="AmethystLoader/waitForImages/dist/jquery.waitforimages.min.js"></script>

<!-- Link fontFaceObserver -->
<script src="AmethystLoader/fontfaceobserver/fontfaceobserver.js"></script>

<!-- Link AmethystLoader script -->
<script src="AmethystLoader.js"></script>

<!-- Initialize the Loader -->
<script type="text/javascript">
AmethystLoader(icon_folder, icon);
</script>

```

Initialization example
```HTML
<script>
AmethystLoader("AmethystLoader/loaders/", "gears.svg");
</script>
```

## Loaders bank
Visit [loading.io](https://loading.io) to get some loaders !

## Loaders in this repository
`Add your loaders by make pull requests !`

| Loaders                                                             | File name     |
| :-----------------------------------------------------------------: |:-------------:|
| ![orbs](http://documents.melvin-lemoine.me/loaders/orbs.svg)        | orbs.svg      |
| ![gears](http://documents.melvin-lemoine.me/loaders/gears.svg)      | gears.svg     |
