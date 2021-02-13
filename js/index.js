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

const srvCard = document.querySelectorAll('.btn_srv-card');
console.log(srvCard);

for ( let i = 0; i < srvCard.length; i++) {
    srvCard[i].addEventListener('click', (evt) => {
        handleDisplayService(evt), false;
    });
}

/**
 * 
 * @param {*} evt display card service 
 */
function handleDisplayService(evt) {
    evt.preventDefault();
    const currentCard = evt.currentTarget.parentNode.parentNode;
    const currentItem = evt.currentTarget;
    console.log('CLICK', currentCard);

    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const card3 = document.querySelector('.card3');

    const left = document.querySelector('.left-card');
    const right = document.querySelector('.right-card');

    function txtBtn(currentItem) 
    {
        if ( currentItem.innerText === 'En savoir plus ?') {
            currentItem.innerHTML = '<strong>&larr; Retour</strong>';
        }
        else {
            currentItem.innerHTML = '<strong>En savoir plus ?</strong>';
        }
    }
    txtBtn(currentItem);
    console.log('CURRENT', currentCard.classList.contains('onSlide') );

    if ( currentCard.classList.contains('onSlide') || currentCard.classList.contains('downCard') ) {
        card1.classList.remove('onSlide', 'downCard', 'actived');

        card2.classList.remove('onSlide', 'downCard', 'actived');

        card3.classList.remove('onSlide', 'downCard', 'actived');
    }
    else {
        if ( currentCard.classList.contains('card1') ) {
            card1.classList.add('actived');
            setTimeout( () => {
                card1.classList.add('downCard');
            }, 600);

            card2.classList.add('onSlide');
            card3.classList.add('onSlide');
        }
    
        else if ( currentCard.classList.contains('card2') ) {
            card2.classList.add('actived');
            setTimeout( () => {
                card2.classList.add('downCard');
            }, 600);

            card1.classList.add('onSlide');
            card3.classList.add('onSlide');
        }
        
        else if ( currentCard.classList.contains('card3') ) {
            card3.classList.add('actived');
            setTimeout( () => {
                card3.classList.add('downCard');
            }, 600);

            card1.classList.add('onSlide');
            card2.classList.add('onSlide');
        }
    }

}

 // add event to button about card
 const btnAbout = document.querySelector('.know-more');
 btnAbout.addEventListener('click', (evt) => {
    handleOpenAboutCard(evt), true;
 });

 /**
 * 
 * @param {*} evt display card about 
 */
 function handleOpenAboutCard(evt) {
    // console.log('CLICK ABOUT');
    evt.preventDefault();

    const currentElmt = evt.currentTarget.parentNode;
    const slideElement = document.querySelector('.about-slide');
    console.log('CURRENT ELEMENT', slideElement);
    if ( slideElement.classList.contains('onSlide') ) {
        slideElement.classList.remove('onSlide');
    }
    else {
        slideElement.classList.add('onSlide');
    }

 };