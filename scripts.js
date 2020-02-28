/////
let startBtn = document.getElementById("startBtn");
let container = document.getElementById("bigcontainer");

container.style.display = 'none';

function initialize (){
  startBtn.style.display = 'none';
  container.style.display = 'flex';

}



///////
const cards = document.querySelectorAll('.card');

let isCardFlipped = false;
let isitTurning = false;
let firstCard, secondCard;
let count = 0;



// (1) adding eventlistener to each card;
cards.forEach(card => card.addEventListener('click', flipCard));

// (2) shuffling the card;
(function randomize() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  }); // assign random numbers to each variable for ordering in the flex box;
})();

// (3) Counting your clikcs;
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}


// (4) Preventing Double Clicks;

function reset() {

  isCardFlipped = false;
  isitTurning = false;
  firstCard = null;
  secondCard = null;

}


function flipCard() {

  this.classList.add('flip');


  if (isitTurning) return;
  if (this === firstCard) return;


  if (isCardFlipped === false) {
    // first click
    isCardFlipped = true;
    firstCard = this;
    incrementValue()

  } else {  
    // second click
    secondCard = this;
    incrementValue()
    // lets check if they match;

    if (firstCard.dataset.framework === secondCard.dataset.framework){ //yes they do match

      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      count++;
      console.log(count);
      reset();
    } else { // NO they do not match!;

      isitTurning = true;

      setTimeout(() => {

        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        reset();
      
      }, 500);
    }
  }
}


