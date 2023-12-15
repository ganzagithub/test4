document.addEventListener('DOMContentLoaded', function() {
    let MenuBtn = document.getElementById('MenuBtn');

    if (MenuBtn) {
        MenuBtn.addEventListener('click', function(e) {
            let bodyElement = document.querySelector('body');

            if (bodyElement) {
                bodyElement.classList.toggle('mobile-nav-active');
            }

            // Toggle between 'fa-bars' and 'fa-xmark'
            this.classList.toggle('fa-bars');
            this.classList.toggle('fa-xmark');
        });
    }

    // Your Typed.js code goes here (assuming the library is properly loaded)
    let typed = new Typed('.auto-input', {
        strings: ['front-end developer!', 'freelancer!', 'UI Designer!', 'youtuber!'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
    });
});
