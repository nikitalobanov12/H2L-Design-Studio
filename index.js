const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const closeButton = document.querySelector('.close-hamburger');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('navigation--open');

});

closeButton.addEventListener('click', () => {
    navigation.classList.toggle('navigation--open');
}
);