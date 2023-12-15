document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded before accessing elements
    let MenuBtn = document.getElementById('MenuBtn');

    if (MenuBtn) {
        MenuBtn.addEventListener('click', function(e) {
            // Ensure the body element is found before toggling the class
            let bodyElement = document.querySelector('body');

            if (bodyElement) {
                bodyElement.classList.toggle('mobile-nav-active');
            }

            // Toggle the 'fa-xmark' class on MenuBtn
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
