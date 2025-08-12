// Fonction d'initialisation du menu burger
function initBurgerMenu() {
    // Sélection des éléments DOM
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Vérifier si les éléments existent
    if (!menuBtn || !navbar) {
        console.error('Éléments du menu introuvables');
        return;
    }

    // Fonction pour basculer l'état du menu
    function toggleMenu() {
        const isActive = menuBtn.classList.toggle('active');
        navbar.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    // Fonction pour fermer le menu
    function closeMenu() {
        menuBtn.classList.remove('active');
        navbar.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Gestionnaire d'événement pour le bouton du menu
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', function(e) {
        if (navbar.classList.contains('active') && 
            !navbar.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            closeMenu();
        }
    });

    // Fermer le menu au clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Gestion du redimensionnement de la fenêtre
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 1023) {
                closeMenu();
            }
        }, 250);
    });

    // Empêcher la propagation des événements dans le menu
    navbar.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Vérifier l'état initial
    if (window.innerWidth <= 1023) {
        navbar.style.transition = 'none';
        navbar.offsetHeight; // Force le recalcul du style
        navbar.style.transition = '';
    }
}

// Initialiser le menu burger une fois le DOM chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBurgerMenu);
} else {
    initBurgerMenu();
}
