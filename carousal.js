const slide = document.querySelector('.carousal-slide');
const cards = document.querySelectorAll('.carousal-slide .card');
const prevButton = document.querySelector('#prev-arrow');
const nextButton = document.querySelector('#next-arrow');

let counter = 0;
let overflowCounter = 3;
const size = cards[0].clientWidth;
prevButton.addEventListener('click', (event) => {
    if (counter <= 0) {
        return;
    }
    cards[counter-1].style.transition = 'transform 0.8s ease-in-out';
    cards[counter - 1].style.transform = 'rotate(0deg)';
    if (overflowCounter > 0) {
        cards[overflowCounter-1].style.transition = 'transform 0.8s ease-in-out';
        cards[overflowCounter - 1].style.transform = 'rotate(90deg)';
        overflowCounter--;
    }
    counter--;
    slide.style.transition = 'transform 0.8s ease-in-out';
    slide.style.transform = `translateX(${(-(size+40) * counter)}px)`
});
nextButton.addEventListener('click', (event) => {
    if (counter >= 3) {
        return;
    }
    cards[counter].style.transition = 'transform 0.8s ease-in-out';
    cards[counter].style.transform = 'rotate(90deg)';
    if (overflowCounter < 6) {
        cards[overflowCounter].style.transition = 'transform 0.8s ease-in-out';
        cards[overflowCounter].style.transform = 'rotate(0deg)';
        overflowCounter++;
    }
    counter++;
    slide.style.transition = 'transform 0.8s ease-in-out';
    slide.style.transform = `translateX(${(-(size+40) * counter)}px)`
});