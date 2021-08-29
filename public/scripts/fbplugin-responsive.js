let intViewportWidth = window.innerWidth;

var fbPlugin = document.querySelector(".fb-page")

try {
    if(intViewportWidth < 650){
        fbPlugin.setAttribute("data-width", 300);
    } 
} catch (error) {
    console.log(error);
}