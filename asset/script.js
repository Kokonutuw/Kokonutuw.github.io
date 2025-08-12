// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments DOM
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Vérifier si les éléments existent avant d'ajouter les écouteurs d'événements
    if (menuBtn && navbar) {
        // Gestionnaire d'événement pour le bouton du menu
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Empêcher la propagation de l'événement
            menuBtn.classList.toggle('active');
            navbar.classList.toggle('active');
            
            // Empêcher le défilement de la page lorsque le menu est ouvert
            document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
        });

        // Fermer le menu en cliquant n'importe où sur la page
        document.addEventListener('click', function(e) {
            if (navbar.classList.contains('active') && !navbar.contains(e.target) && !menuBtn.contains(e.target)) {
                menuBtn.classList.remove('active');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Fermer le menu lorsqu'un lien est cliqué (pour la navigation mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Fermer le menu lors du redimensionnement de la fenêtre
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1023) {
                menuBtn.classList.remove('active');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
