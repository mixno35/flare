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