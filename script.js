// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation (basic)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform form validation or send data via AJAX
    alert('Message sent!'); // Replace with actual form submission logic
});
