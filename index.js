const backgroundImage = document.querySelectorAll(".bg-img");
const expander = document.getElementsByClassName("footer-expander");
const footerContent = document.getElementsByClassName("footer");
let mouseX;
let mouseY;
let xpos = 0;
let ypos = 0;
let deg = 0;

document.addEventListener("mousemove", (e) => (mouseX = e.pageX, mouseY = e.pageY))

/*****************************************************************************************
* Masked background image rotation & movement based on mouse position
*****************************************************************************************/
function tick() {
    backgroundImage.forEach(
        function(el) {
            const current = getComputedStyle(el);
            const matrix = current.transform;
            if(deg >= 360) {
                deg = 0;
            }
            if((mouseX && mouseX != Math.round(xpos)) || (mouseY && mouseY != Math.round(ypos))) {
                xpos = Math.round((xpos + (mouseX - xpos) * 0.01)*100)/100;
                ypos = Math.round((ypos + (mouseY - ypos) * 0.01)*100)/100;
                el.style.transform = `translate(${xpos}px, ${ypos}px) rotate(${deg}deg)`;
            } else { // update transform property without change to translate values
                el.style.transform = `translate(${xpos}px, ${ypos}px) rotate(${deg}deg)`;
            }
            deg+=0.05;
        }
    )
}

setInterval(tick, 33);

/*****************************************************************************************
* Footer expander button. Triggers transition in CSS.
*****************************************************************************************/
expander[0].addEventListener("click", footerExpand)

function footerExpand(){
    if (footerContent[0].style.maxHeight){
        footerContent[0].style.maxHeight = null;
    } else {
        footerContent[0].style.maxHeight = "50px";
    }
}
