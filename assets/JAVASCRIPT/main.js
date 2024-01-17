/*
Javascript file designated to flip the cards on click 
and dynamically choose deck of cards to populate
*/

const cards = document.querySelectorAll('.card__inner');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    // const cardInner = card.querySelector('.card__inner'); // Select the inner card element
    card.classList.toggle('is-flipped');
  });
});

const cardContainer = document.querySelector('.card__inner');  //controls the dynamic population of card contents
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const restartButton = document.querySelector('#restart');

// Initialize variables
let currentIndex = 0;
let cardsData = [];


// Fetch data from JSON file for dynmic cards 
// fetch('assets/JSON/chapter3.json')
//   .then((response) => response.json())
//   .then((data) => {
//     cardsData = Object.entries(data);
//     showCard(currentIndex); // Display the first card

//     nextButton.addEventListener('click', () => {
//       currentIndex++;
//       if (currentIndex < cardsData.length) {
//         showCard(currentIndex);
//       } else {
//         // Handle reaching the end of cards
//         alert('End of cards');
//       }
//     });

//     previousButton.addEventListener('click', function() {
//         currentIndex--;
//         showCard(currentIndex);
//     });

//     restartButton.addEventListener('click', () => {
//       currentIndex = 0;
//       showCard(currentIndex);
//     });
//   })
//   .catch(error => console.error(error));

// Adding the chapter sidebar dynamic feature
function fetchData(chapter) {
  fetch(`assets/JSON/${chapter}.json`)
    .then((response) => response.json())
    .then((data) => {
      cardsData = Object.entries(data);
      currentIndex = 0; // Reset index when changing chapters
      showCard(currentIndex);
     
      nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < cardsData.length) {
          showCard(currentIndex);
        } else {
          // Handle reaching the end of cards
          alert('End of cards');
        }
      });
  
      previousButton.addEventListener('click', function() {
          currentIndex--;
          showCard(currentIndex);
      });
  
      restartButton.addEventListener('click', () => {
        currentIndex = 0;
        showCard(currentIndex);
      });
    })
    .catch(error => console.error(error));
}

// fetchData('chapter3')

const sidebarLinks = document.querySelectorAll('.nav-link');

sidebarLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    // const chapter = link.textContent.trim().toLowerCase().replace(/\s/g, '-');
    const chapter = link.dataset.chapter;
    fetchData(chapter);

    // Close the off-canvas menu
    const offcanvasExample = new bootstrap.Offcanvas(document.getElementById('offcanvasExample'));
    offcanvasExample.hide();
  });
});


// Function to display a specific card
function showCard(index) {
  const [key, cardData] = cardsData[index];
  const { question, answer } = cardData;

  const card = `
        <div class="card__face card__face--front">
          <div class="card__content">    
            <h2>${key}</h2>
            <p>${question}</p>
          </div>    
        </div>
        <div class="card__face card__face--back--gen">
          <div class="card__content">
            <h2>${key}</h2>  
            <p>${answer}</p>
          </div>        
        </div>

  `;
  console.log(cardContainer);
  // console.log(cardsData);
  // console.log(cardData);
  // console.log(cardData.length);
  // console.log(card);
  // console.log(key)
  cardContainer.innerHTML = card;

}

