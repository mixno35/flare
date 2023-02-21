# Flare effect - CSS, JS
### A simple example of the flare effect on hover

#

> ### Source
### JS File -> [flare.js](/flare.js)
```JS
// javascript
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("point").addEventListener("mouseenter", () => {
            document.getElementById("point").appendChild(document.createElement("flare"));
        });
        document.getElementById("point").addEventListener("mouseleave", () => {
            document.getElementById("point").querySelector("flare").remove();
        });
    }, 1000);
});

// jquery
$(document).ready(function(){
    setTimeout(() => {
        $('#point').hover(function () {
                $(this).append('<flare></flare>');
            }, function () {
                this.querySelector('flare').remove();
            }
        );
    }, 1000);
});
```
### CSS File -> [flare.css](/flare.css)
```CSS
flare {
    position: absolute;
    top: 0;
    height: 100%;
    width: 185px;
    transform: skewX(-30deg);
    animation: flareAnimation;
    left: -180%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.153), rgba(255, 255, 255, 0.314), rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0));
    animation: flareAnimation 1s linear; /* FOR HOVER */
    animation: flareAnimation 2s infinite linear; /* REPEAT */
}

@keyframes flareAnimation {
    0% {
        left: -180%;
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        left: 80%;
        opacity: 0;
    }
}
```
#### Required parameters for the element.
```CSS
/*....*/
#point {
    position: relative;
    overflow: hidden;
}
/*....*/
```

#

> ### Docs
#### Add style file to the document.
```HTML
<link rel="stylesheet" href="flare.css">
```
#### Add script file to the document.
```HTML
<script type="text/javascript" src="flare.js"></script>
```
#### Create element equals id - #point to the document.
```HTML
<button id="point">Point it at me</button>
```