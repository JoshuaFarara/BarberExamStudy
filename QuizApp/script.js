//below section for hiding and showing the start button and the game
// workflow: start the game, actino for clicking next button, action for choosing an answer
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// variables below for shuffling th equestions
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5) //add in the shuffled questions in this. 
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    //******************hide and show start game, ends ************************
    // sets next question
    setNextQuestion()

}


function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button =  document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

        
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    } else {
        startButton.innerHTML = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'What is the json implementation to this section of javascript code?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
        ]
        
    },
    {
        question: 'Where is he from?',
        answers: [
            {text: 'Atlanta', correct: true},
            {text: 'Statesboro', correct: false},
            {text: 'Savannah', correct: false},
            {text: 'Hiram', correct: false},
        ]
    },
    {
        question: 'Where did he attend college?',
        answers: [
            {text: 'Georgia Southern', correct: true},
            {text: 'Georgia State', correct: false},
            {text: 'Georgia Tech', correct: false},
            {text: 'Kennesaw State', correct: false},
        ]
    },
    {
        question: 'What are his wife and son's names?',
        answers: [
            {text: 'Nailah', correct: true},
            {text: 'Caleb', correct: false},
            {text: 'Asa', correct: true},
            {text: 'Ava', correct: false},
        ]
    },
    {
        question: 'What is FararaTheArtist first name?'d,
        answers: [
            {text: 'Joshua', correct: true},
            {text: 'John', correct: false},
            {text: 'James', correct: false},
            {text: 'Joseph', correct: false},
        ]
    },
]

