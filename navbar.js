window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    // Pega a rolagem atual de forma compatível com qualquer navegador
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});