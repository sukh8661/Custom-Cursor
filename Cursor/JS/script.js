var main = document.querySelector("#main");
var cursor = document.querySelector(".cursor");
var body = document.querySelector("body");

main.addEventListener("mousemove", function(e){
    cursor.style.left = e.x + "px"
    cursor.style.top = e.y + "px"
    cursor.style.opacity= "1";
});

body.addEventListener("mouseenter", function() {
    cursor.style.opacity= "1";
});

body.addEventListener("mouseleave", function() {
    cursor.style.opacity= "0";
});
