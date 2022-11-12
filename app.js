const corouselSlide = document.querySelector('.corousel-slide');
const corouselImages = document.querySelectorAll('.corousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = corouselImages[0].clientWidth;

corouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= corouselImages.length - 1) return;
    corouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    corouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    corouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    corouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

corouselSlide.addEventListener('transitionend', () => {
    if (corouselImages[counter].id === 'lastClone') {
        corouselSlide.style.transition = "none";
        counter = corouselImages.length - 2;
        corouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (corouselImages[counter].id === 'firstClone') {
        corouselSlide.style.transition = "none";
        counter = corouselImages.length - counter;
        corouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
