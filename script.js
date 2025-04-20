document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});