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

const moreInfo = document.querySelectorAll('.btn-card');
console.log(moreInfo);

for ( let i = 0; i < moreInfo.length; i++) {
    moreInfo[i].addEventListener('click', (evt) => {
        handleDisplayService(evt), false;
    });
}

function handleDisplayService(evt) {
    evt.preventDefault();
    const currentCard = evt.currentTarget.parentNode;
    console.log('CLICK', currentCard);

    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const card3 = document.querySelector('.card3');

    if ( currentCard.classList.contains('card1') ) {
        card1.classList.add('active');
        card2.classList.add('notActive');
        card3.classList.add('notActive');
    }

    else if ( currentCard.classList.contains('card2') ) {
        card2.classList.add('active');
        card1.classList.add('notActive');
        card3.classList.add('notActive');
    }
    
    else if ( currentCard.classList.contains('card3') ) {
        card3.classList.add('active');
        card2.classList.add('notActive');
        card1.classList.add('notActive');
    }

}