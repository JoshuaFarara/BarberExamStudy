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

const cards = document.querySelectorAll('.card__inner');

cards.forEach(function(card) {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    })
});