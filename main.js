let array_cards = Array.from(document.querySelector('.cards').children);
array_cards.forEach((card) => {
    if (card.classList.contains('card-active')) {
        let indexActive = parseInt(card.getAttribute('data-index'));
        init(indexActive);
        console.log(indexActive);
        return;
    }
});


array_cards.forEach((card) => {
    card.onclick = () => {
        let index = parseInt(card.getAttribute('data-index'));
        init(index);
    }
});

function init(index) {
    let key;
    deleteclass();
    key = index;
    if (index - 1 > -1)
        array_cards[key - 1].setAttribute('class', 'card card-no-active-2')
    if (index + 1 < 4)
        array_cards[key + 1].setAttribute('class', 'card card-no-active-1')
    array_cards[index].setAttribute('class', 'card card-active')
    document.querySelector('.slider').style.backgroundImage = "url('imgs/" + (index + 1) + ".jpg')"
}

function deleteclass() {
    array_cards.forEach((card) => {
        card.setAttribute('class', 'card')
    });
}

window.onscroll = function () {
    if (window.pageYOffset >= 102)  document.querySelector('.navbar_top').style.backgroundColor = 'rgba(252, 252, 252, 1)'; 
    else  document.querySelector('.navbar_top').style.backgroundColor = 'rgba(252, 252, 252,0)'; 
    if (window.pageYOffset >= 115)
    {
        document.querySelector('.a1').style.animationPlayState = "running";
        document.querySelector('.a2').style.animationPlayState = "running";
        document.querySelector('.a3').style.animationPlayState = "running";
    }
    console.log(window.pageYOffset);
    
};