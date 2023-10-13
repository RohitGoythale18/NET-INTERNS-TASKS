document.addEventListener('DOMContentLoaded', function() {
    function addFadeInUpAnimation(element) {
        element.classList.add('fade-in-up');
    }

    function createIntersectionObserver(targetElement) {
        var options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        var observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    addFadeInUpAnimation(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        observer.observe(targetElement);
    }

    var secondContainer = document.querySelector('.second-container');
    var fourthContainer = document.querySelector('.fourth-container');
    var fifthContainer = document.querySelector('.fifth-container');
    var sixthContainer = document.querySelector('.sixth-container');

    createIntersectionObserver(secondContainer);
    createIntersectionObserver(fourthContainer);
    createIntersectionObserver(fifthContainer);
    createIntersectionObserver(sixthContainer);
});

var style = document.createElement('style');
style.innerHTML = `
    .fade-in-up {
        animation: fadeInUp 2s ease;
    }
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);