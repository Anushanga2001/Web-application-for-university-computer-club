// Carousel code
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });

    currentSlide = index;
}

function plusSlides(n) {
    showSlide(currentSlide + n);
}

// Automatically change the slide every 2 seconds (2000 milliseconds)
setInterval(() => plusSlides(1), 2000);

// Initial display
showSlide(currentSlide);

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add any specific interactivity for the About Us page here

    // Example: Highlight the navigation link for the current page
    var currentPage = window.location.pathname.split("/").pop();
    var navLinks = document.querySelectorAll("nav ul li a");

    for (var i = 0; i < navLinks.length; i++) {
        var link = navLinks[i];
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#64B5F6"; // Apply accent color to the current page link
        }
    }
});
