// Gestion du bouton Home
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('.nav-header a[href="#home"]');

    if(homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Gestion du Menu Burger
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if(mobileMenu) {
        mobileMenu.style.display = (
            mobileMenu.style.display === 'none' || 
            mobileMenu.style.display === '') ? 'block' : 'none';
    }
};