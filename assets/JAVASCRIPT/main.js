//javascript document
//below: JSON, written in this format of key value pairs, ex: {"key":"value", "key":"value"}
// assigned to a variable  and enclosed in single quotes becasue it is a string

// var clippers = '{"favClippers":"BabylissPro", "favTrimmers":"fxBoost", "favBarber":"FararaTheArtist"}';
// //creates new variable set equal to: parsing the object clippers
// var myObject = JSON.parse(clippers);
// console.log(myObject);
// //converts an object back into a string
// var myString = JSON.stringify(myObject);
// console.log(myString)
// //convert string back into an object
// var myObject = JSON.parse(myString);
// console.log(myObject);

// var websites = '{"barbering":"wwww.FararaTheArtist.com", "MediaAgency":"www.lyfjourney.com", "barbershop":"www.blessedhandsbarbershop.net"}';
// var webObject = JSON.parse(websites);
// console.log(webObject);

// //display objeject within a variable for index file
// document.getElementById('message').innerHTML = myObject.favTrimmers;

// var barbers = '{"Joshua":{"age":"27", "nickname":"FararaTheArtist"}, "Monty":{"age":"41", "nickname":"MontyDaBarber"}}';
// var barbersObject = JSON.parse(barbers);
// console.log(barbersObject)

// // document.getElementById('message').innerHTML = barbersObject.Joshua.nickname;
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'data.json', true);
// xhr.responseType = 'text';
// xhr.send();

// xhr.onload = function() {
//     if(xhr.status ===200) {
//         var mystuff = JSON.parse(xhr.responseText);
//         console.log(myStuff);

//     console.log(myStuff[1]);
//     } // end of if
// } //end of the function

// const card = document.querySelectorAll('.card__inner');

// card.addEventListener('click', function () {
//     card.classList.toggle('is-flipped');
// });

/*
First Iteration
*/

// const cards = document.querySelectorAll('.card__inner');

// cards.forEach(function(card) {
//     card.addEventListener('click', function () {
//         card.classList.toggle('is-flipped');
//     });
// });

/* Working iteration*/
// const cards = document.querySelectorAll('.card__inner');

// cards.forEach(function(card) {
//   card.addEventListener('click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });
/* end of working iteration */

// fetch('assets/JSON/chapter6.json')
//     .then(response => response.json())
//     .then(data => {
//         let cardContainer = document.querySelector('.card__inner');

//         for (let key in data) {
//             let question = data[key].question;
//             let answer = data[key].answer;

  

//             let card = `
//                 <div class="card">
//                     <div class="card__inner"> 
//                         <div class="card__face card__face--front">
//                             <div class="card__content">    
//                                 <h2>${key}</h2>
//                                 <p>${question}</p>
//                             </div>    
//                         </div>
//                         <div class="card__face card__face--back">
//                             <div class="card__content">
//                                 <div class="card__header">
//                                     </div>
//                                 <div class="card__body">    
//                                     <div class="answer">${answer}</div>
                                    
//                                 </div>
//                             </div>        
//                         </div>
//                     </div>
//                 </div>
//             `;



//             cardContainer.innerHTML += card;
//         }

//         let restartButton = document.querySelector('#restart');

//         restartButton.addEventListener('click', () => {
//             window.location.reload();
//         });
//     })
//     .catch(error => console.error(error));

/*
Modified First Iteration
Updated Implementation
*/

// const cards = document.querySelectorAll('.card__inner');
// let currentCardIndex = 0;

// function flipCard(card) {
//     card.classList.toggle('is-flipped');
// }

// function displayCard(cardIndex) {
//     cards.forEach(function(card, index) {
//         if (index === cardIndex) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }

// function showNextCard() {
//     if (currentCardIndex < cards.length - 1) {
//         flipCard(cards[currentCardIndex]);
//         currentCardIndex++;
//         displayCard(currentCardIndex);
//         flipCard(cards[currentCardIndex]);
//     }
// }

// cards.forEach(function(card) {
//     card.addEventListener('click', function () {
//         flipCard(card);
//     })
// });

// fetch('assets/JSON/chapter6.json')
//     .then(response => response.json())
//     .then(data => {
//         let cardContainer = document.querySelector('.card__container');

//         for (let key in data) {
//             let question = data[key].question;
//             let answer = data[key].answer;

//             let card = `
//                 <div class="card">
//                     <div class="card__inner">
//                         <div class="card__face card__face--front">
//                             <h2>${key}</h2>
//                             <div class="question">${question}</div>
//                         </div>
//                         <div class="card__face card__face--back">
//                             <div class="card__content">
//                                 <div class="card__header"></div>
//                                 <div class="card__body">
//                                     <div class="answer">${answer}</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `;

//             cardContainer.innerHTML += card;
//         }

//         displayCard(currentCardIndex);

//         let nextButton = document.querySelector('#next');
//         nextButton.addEventListener('click', showNextCard);

//         let restartButton = document.querySelector('#restart');
//         restartButton.addEventListener('click', () => {
//             window.location.reload();
//         });
//     })
//     .catch(error => console.error(error));



/*
Second Iteration
*/

// function buildCard(question, answer) {
//     let cardContainer = document.querySelector('.card-container');

//     // let card = `
//     //     <div class="card">
//     //         <div class="question">${question}</div>
//     //         <div class="answer">${answer}</div>
//     //     </div>
//     // `;

//     let card = `
//         <div class="card">
//             <div class="card__inner"> 
//                 <div class="card__face card__face--front">
//                     <h2>${key}</h2>
//                     <div class="question">${question}</div>
//                 </div>
//                 <div class="card__face card__face--back">
//                     <div class="card__content">
//                         <div class="card__header">
//                             </div>
//                         <div class="card__body">    
//                             <div class="answer">${answer}</div>
                            
//                         </div>
//                     </div>        
//                 </div>
//             </div>
//         </div>
//     `;

//     cardContainer.innerHTML = card;
// }

// function fetchQuestionsAndBuildCards() {
//     fetch('questions.json')
//         .then(response => response.json())
//         .then(data => {
//             let questions = Object.values(data);
//             let currentIndex = 0;
            

//             function showNextCard() {
//                 if (currentIndex >= questions.length) {
//                     alert("End of questions. Restarting...");
//                     currentIndex = 0;
//                 }

//                 let question = questions[currentIndex].question;
//                 let answer = questions[currentIndex].answer;
//                 // let question = data[key].question;
//                 // let answer = data[key].answer;

//                 buildCard(question, answer);
//                 currentIndex++;
//             }

//             showNextCard();

//             let nextButton = document.querySelector('#next');
//             let restartButton = document.querySelector('#restart');

//             nextButton.addEventListener('click', showNextCard);
//             restartButton.addEventListener('click', () => {
//                 alert("Restarting...");
//                 currentIndex = 0;
//                 showNextCard();
//             });
//         })
//         .catch(error => console.error(error));
// }

// fetchQuestionsAndBuildCards();

// 3rd iteration
// Get references to relevant elements

// const cards = document.querySelectorAll('.card__inner');

// cards.forEach(function(card) {
//   card.addEventListener('click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });

// const cardContainer = document.querySelector('.card__inner');
// const nextButton = document.querySelector('#next');
// const previousButton = document.querySelector('#previous');
// const restartButton = document.querySelector('#restart');

// // Initialize variables
// let currentIndex = 0;
// let cardsData = [];

// // Fetch data from JSON file
// fetch('assets/JSON/chapter6.json')
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

// // Function to display a specific card
// function showCard(index) {
//   const [key, cardData] = cardsData[index];
//   const { question, answer } = cardData;

//   const card = `
//     <div class="card">
//       <div class="card__inner">
//         <div class="card__face card__face--front">
//           <div class="card__content">    
//             <h2>${key}</h2>
//             <p>${question}</p>
//           </div>    
//         </div>
//         <div class="card__face card__face--back">
//           <div class="card__content">
//             <h2>${key}</h2>  
//             <p>${answer}</p>
//           </div>        
//         </div>
//       </div>
//     </div>
//   `;
//   console.log(cardContainer);
//   console.log(cardData);
//   console.log(cardData.length);
//   console.log(card);
//   console.log(key)
//   cardContainer.innerHTML = card;

// }

/* 4th Iteration */

const cards = document.querySelectorAll('.card'); // Select all card containers

cards.forEach(function(card) {
  const cardInner = card.querySelector('.card__inner'); // Select the inner card element

  cardInner.addEventListener('click', function() {
    cardInner.classList.toggle('is-flipped');
  });
});

const cardContainers = document.querySelectorAll('.card__inner'); // Select all card containers
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const restartButton = document.querySelector('#restart');

// Initialize variables
let currentIndex = 0;
let cardsData = [];

// Fetch data from JSON file
fetch('assets/JSON/chapter6.json')
  .then((response) => response.json())
  .then((data) => {
    // cardsData = [];
    // for (const key in data) {
    //   if (Object.hasOwnProperty.call(data, key)) {
    //     const cardData = data[key];
    //     cardsData.push(cardData);
    //   }
    // }
    cardsData = Object.entries(data); // the working line
    // cardsData = Object.values(data);
    // cardsData = Object.keys(data).map((key) => data[key]);
    showCard(currentIndex); // Display the first card

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
  .catch((error) => console.error(error));

// Function to display a specific card
function showCard(index) {
  const cardContainer = cardContainers[index];
  // if (!cardContainer) {
  //   console.error(`Card container not found at index ${index}`);
  //   return;
  // }
  const [key, cardData] = cardsData[index];
  const { question, answer } = cardData;

  const card = `
    <div class="card__inner">
      <div class="card__face card__face--front">
        <div class="card__content">
          <h2>${key}</h2>
          <p>${question}</p>
        </div>
      </div>
      <div class="card__face card__face--back--gen">
        <div class="card__content">
          <h2>${key}</h2>
          <h4>*</h4>
          <p>${answer}</p>
        </div>
      </div>
    </div>
  `;
  console.log(cardContainers);
  console.log(cardData);
  console.log(cardData.length);
  console.log(card);
  cardContainer.innerHTML = card;
}


// 5th iteration
// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card) {
//   const cardInner = card.querySelector('.card__inner');

//   cardInner.addEventListener('click', function() {
//     cardInner.classList.toggle('is-flipped');
//   });
// });

// const cardContainers = document.querySelectorAll('.card__inner');
// const nextButton = document.querySelector('#next');
// const previousButton = document.querySelector('#previous');
// const restartButton = document.querySelector('#restart');

// let currentIndex = 0;
// let cardsData = [];

// fetch('assets/JSON/chapter6.json')
//   .then((response) => response.json())
//   .then((data) => {
//     cardsData = Object.entries(data);
//     showCard(currentIndex);

//     nextButton.addEventListener('click', () => {
//       currentIndex++;
//       if (currentIndex < cardsData.length) {
//         showCard(currentIndex);
//       } else {
//         currentIndex = 0;
//         showCard(currentIndex);
//       }
//     });

//     previousButton.addEventListener('click', () => {
//       currentIndex--;
//       if (currentIndex >= 0) {
//         showCard(currentIndex);
//       } else {
//         currentIndex = cardsData.length - 1;
//         showCard(currentIndex);
//       }
//     });

//     restartButton.addEventListener('click', () => {
//       currentIndex = 0;
//       showCard(currentIndex);
//     });
//   })
//   .catch((error) => console.error(error));

// function showCard(index) {
//   const cardContainer = cardContainers[index];
//   const [key, cardData] = cardsData[index];
//   const { question, answer } = cardData;

//   const card = `
//     <div class="card__face card__face--front">
//       <div class="card__content">
//         <h2>${key}</h2>
//         <p>${question}</p>
//       </div>
//     </div>
//     <div class="card__face card__face--back">
//       <div class="card__content">
//         <h2>${key}</h2>
//         <p>${answer}</p>
//       </div>
//     </div>
//   `;

//   cardContainer.innerHTML = card;
// }
