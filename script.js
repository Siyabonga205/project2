document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the "hidden" class
    const hiddenElements = document.querySelectorAll(".hidden");

    // Intersection Observer to trigger animations when elements are visible
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Add the "show" class when visible
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.3 // Element is triggered when 30% is visible
    });

    // Apply observer to all hidden elements
    hiddenElements.forEach(el => observer.observe(el));

    // HERO SECTION ANIMATION: Background Zoom Effect
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
        heroSection.style.animation = "bgZoom 8s ease-in-out infinite alternate";
    }

    // BUTTON HOVER ANIMATION: Scale on Hover
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});

