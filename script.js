document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    
    const numberOfSquares = 10;

    for (let i = 0; i < numberOfSquares; i++) {
        setTimeout(() => {
            createSquare(hero);
        }, i * 500); 
    }
});

function createSquare(hero) {
    const square = document.createElement('div');
    square.classList.add('square');
    setPosition(square);
    hero.appendChild(square);
}

function setPosition(square) {
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;

    square.style.top = `${randomTop}%`;
    square.style.left = `${randomLeft}%`;
}
