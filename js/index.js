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
    const currentItem = evt.currentTarget;
    console.log('CLICK', currentItem);

    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const card3 = document.querySelector('.card3');

    const left = document.querySelector('.left-card');
    const right = document.querySelector('.right-card');

    function txtBtn(currentItem) 
    {
        if ( currentItem.innerText === 'En savoir plus ?') {
            currentItem.innerHTML = '&larr; Retour';
        }
        else {
            currentItem.innerHTML = 'En savoir plus ?';
        }
    }
    txtBtn(currentItem);

    if ( currentCard.classList.contains('upperCard') || currentCard.classList.contains('downCard') ) {
        card1.classList.remove('upperCard', 'downCard', 'hardCard');
        card1.style.removeProperty('width');

        card2.classList.remove('upperCard', 'downCard', 'hardCard');
        card2.style.removeProperty('width');

        card3.classList.remove('upperCard', 'downCard', 'hardCard');
        card3.style.removeProperty('width');

        right.classList.remove('hardCard');
        left.classList.remove('hardCard');
    }
    else {
        if ( currentCard.classList.contains('card1') ) {
            card1.classList.add('upperCard', 'hardCard');
            left.classList.add('hardCard');
            right.classList.add('hardCard');
            

            card2.classList.add('downCard');
            card3.classList.add('downCard'); 
        }
    
        else if ( currentCard.classList.contains('card2') ) {
            card2.classList.add('upperCard', 'hardCard');
            left.classList.add('hardCard');
            right.classList.add('hardCard');

            card1.classList.add('downCard');
            card3.classList.add('downCard');
        }
        
        else if ( currentCard.classList.contains('card3') ) {
            card3.classList.add('upperCard', 'hardCard');
            left.classList.add('hardCard');
            right.classList.add('hardCard');

            card1.classList.add('downCard');
            card2.classList.add('downCard');
        }
    }

}