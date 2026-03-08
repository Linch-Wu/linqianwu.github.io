document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Smooth scrolling for internal navigation links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. A subtle nod to anyone checking the developer console
    console.log("%c>> Welcome to my local trivialization.", "color: #7dd3fc; font-family: monospace; font-size: 14px;");
    console.log("Feel free to browse the source code.");
});
