// Sélection des éléments DOM
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Gestionnaire d'événement pour le bouton du menu
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('active');
    
    // Empêcher le défilement de la page lorsque le menu est ouvert
    document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
});

// Fermer le menu lorsqu'un lien est cliqué (pour la navigation mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            menuBtn.classList.remove('active');
            navbar.classList.remove('active');
            document.body.style.overflow = ''; // Réactiver le défilement
        }
    });
});

// Fermer le menu lors du redimensionnement de la fenêtre (au cas où l'utilisateur tourne son appareil)
window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
        menuBtn.classList.remove('active');
        navbar.classList.remove('active');
        document.body.style.overflow = ''; // Réactiver le défilement
    }
});
