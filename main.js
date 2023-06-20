const cardArray = [
    {
        name: 'plankton',
        src: './assets/plankton.jpg'
    },
    {
        name: 'Jerry',
        src: './assets/Jerry.jpg'
    },
    {
        name: 'Patric',
        src: './assets/Patric.jpg'
    },
    {
        name: 'Rabbit',
        src: './assets/Rabbit.jpg'
    },
    {
        name: 'Spongebob',
        src: './assets/Spongebob.jpg'
    },
    {
        name: 'Tom',
        src:  './assets/Tom.jpg'
    },{
        name: 'plankton',
        src: './assets/plankton.jpg'
    },
    {
        name: 'Jerry',
        src: './assets/Jerry.jpg'
    },
    {
        name: 'Patric',
        src: './assets/Patric.jpg'
    },
    {
        name: 'Rabbit',
        src: './assets/Rabbit.jpg'
    },
    {
        name: 'Spongebob',
        src: './assets/Spongebob.jpg'
    },
    {
        name: 'Tom',
        src:  './assets/Tom.jpg'
    }
];
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];


const resultDisplay = document.getElementById('result');

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById('grid');

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');

    if (cardsChosen[0] != cardsChosen[1]) {
        cards[cardsChosenId[0]].setAttribute('src' , 'assets/background.jpg');
        cards[cardsChosenId[1]].setAttribute('src' , 'assets/background.jpg');
    }

    if (cardsChosen[0] == cardsChosen[1]){
        cards[cardsChosenId[0]].setAttribute('src' , 'assets/blank.jpg');
        cards[cardsChosenId[1]].setAttribute('src' , 'assets/blank.jpg');

        cards[cardsChosenId[0]].removeEventListener('click' , flipCard);
        cards[cardsChosenId[1]].removeEventListener('click' , flipCard);

        cardsWon.push(cardsChosen);
    } 

    cardsChosen = [];
    cardsChosenId = [];

    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = "Congratulations! you found them all!";
    }
}

function createBoard(array) {
    for (let i = 0; i < array.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/background.jpg');
        card.setAttribute('data-id' , [i]);
        card.addEventListener('click' ,flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard(cardArray);

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src' ,cardArray[cardId].src);

    if(cardsChosen.length === 2){
        setTimeout(checkMatch , 500);
    }
}
