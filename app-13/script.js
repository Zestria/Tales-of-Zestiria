const navSlide = () => {
    var burger = document.querySelector(".burger"),
        navList = document.querySelector('.nav-list'),
        navItem = document.querySelectorAll('.nav-item');

        // Toggle nav
        burger.addEventListener('click', () => {
            navList.classList.toggle('nav-active');

            // Animate Links
            navItem.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                }
            });
            // Burger animation
            burger.classList.toggle('toggle');
        });
}
navSlide();
