const buttonLeft = document.getElementById("button-left")
const buttonRight = document.getElementById("button-right")


buttonLeft.addEventListener("click", () => {
      const offset = buttonLeft.dataset.carouselButton === "next" ? 1 : -1
      const slides = buttonLeft.closest("[data-carousel]").querySelector("[data-slides]")
 
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    console.log(newIndex)
   
 
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
 
    buttonRight.addEventListener("click", () => {
      const offset = buttonRight.dataset.carouselButton === "next" ? 1 : -1
      const slides = buttonRight.closest("[data-carousel]").querySelector("[data-slides]")
 
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    console.log(newIndex)
   
 
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })


// JavaScript code for the Chart.js chart

// Add this to your existing script.js file or include it in the same <script> tag in your HTML

// JavaScript code for the Chart.js chart and image pop-up
document.addEventListener("DOMContentLoaded", function () {
    const hoverTriggers = document.querySelectorAll(".hover-trigger");

    hoverTriggers.forEach(trigger => {
        trigger.addEventListener("mouseover", () => {
            const imageUrl = trigger.getAttribute("data-image");
            console.log("Mouseover event triggered. Image URL:", imageUrl);
            if (imageUrl) {
                showImagePopup(imageUrl);
            }
        });

        trigger.addEventListener("mouseout", () => {
            console.log("Mouseout event triggered.");
            hideImagePopup();
        });
    });

    function showImagePopup(imageUrl) {
        const imageContainer = document.querySelector(".image-container");
        const hoveredImage = document.getElementById("hoveredImage");
        hoveredImage.src = imageUrl;
        imageContainer.style.display = "block";
    }

    function hideImagePopup() {
        const imageContainer = document.querySelector(".image-container");
        imageContainer.style.display = "none";
    }
});




