// Contact form submit handler
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    alert("Thank you! Your message has been submitted.");

    // Clear all input fields
    this.reset();
});
