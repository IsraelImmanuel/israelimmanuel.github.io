const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('#phrase ul');
const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const winText = document.querySelector('.title');
const ul = document.querySelector('ul');
const letter = document.getElementsByClassName('letter');

let missed = 0;

const phrases = [
  'twelve carat toothache',
  'whole lotta red',
  'come home the kids miss you',
  'tickets to my downfall',
  'i never liked you',
]

startButton.addEventListener('click',(e) => {
  e.preventDefault();
  overlay.style.display = 'none';
});

  function getRandomPhraseAsArray(arr) {
  const randomPhrase = Math.floor(Math.random() * phrases.length);
  let Phrase = arr[randomPhrase];
  console.log(Phrase);
  return Phrase;
}

const randomPhrase = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1){
    let letter = arr[i];
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.textContent = letter;
    ul.appendChild(li);

    if (letter === " ") {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
    }
  }
  addPhraseToDisplay(randomPhrase);

  let clickedLetter = document.querySelectorAll('.letter');
  function checkLetter(arr) {
    let match = null;

    for (let i = 0; i < clickedLetter.length; i += 1) {
      const li = clickedLetter[i];
      if (letter[i].textContent === arr.textContent){
        letter[i].classList.add('show');

        match = arr.textContent;
      }
    }
    return match;
  }

  qwerty.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON') {
      button.disabled = true;
      button.className = "chosen";
      let letterFound = checkLetter(button);

      if (letterFound === null) {
        const heart = document.querySelectorAll(".tries img");
        heart[missed].src = "images/lostHeart.png";
        missed += 1;
      }
    }
    checkWin();
  });

  function resetGame(){
    startButton.addEventListener('click', (e) => {
      ul.style.display = 'none';
      
    })
  };

  function checkWin() {


    const show = document.getElementsByClassName('show');
    const letters = document.getElementsByClassName('letter');
    if (letters.length === show.length) {
      overlay.classList.add('win');
      overlay.style.display = 'flex';
      winText.textContent = "You Win!";
      startButton.textButton = "Restart";

      resetGame();
        }

          if (missed >= 5) {

            overlay.classList.add ('lose');
            overlay.style.display = 'flex';
            winText.textContent = 'You lose!';
            startButton.textContent = "Restart";
            resetGame();
          }
        };
