
        // Simple JavaScript for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Preloader
            window.addEventListener('load', function() {
                const preloader = document.querySelector('.preloader');
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            });

            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        });