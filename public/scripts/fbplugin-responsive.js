let intViewportWidth = window.innerWidth;

var fbPlugin = document.querySelector(".fb-page")

try {
    if(intViewportWidth < 650){
        fbPlugin.setAttribute("data-adapt-container-width", 'true');
    } 
} catch (error) {
    console.log(error);
}