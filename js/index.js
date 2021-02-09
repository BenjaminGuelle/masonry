const btnMenu = document.querySelector('.btn-toggle');
const navMenu = document.querySelector('.links');
const line = document.querySelector('.line-toggle');
btnMenu.addEventListener('click', () => {
    handletogglerMenu();
});

function handletogglerMenu() {
    console.log('CLICK');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        line.classList.remove('active');
    }
    else {
        navMenu.classList.add('active');
        line.classList.add('active');
    }
};