
function scrollWeb() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        if (isElementInViewport(card) && !card.classList.contains('apareceCard')) {
            card.classList.add('apareceCard');
        }
    });
}

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.top + rect.height >= 0;
}

window.addEventListener('scroll', scrollWeb);
window.addEventListener('DOMContentLoaded', scrollWeb);

