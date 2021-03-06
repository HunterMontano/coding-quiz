//clicking start starts the game 
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('answer-buttons')
var btn0 = document.getElementById('btn0')
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var questionCounter = 0


startButton.addEventListener('click', () => {
    startGame()
})

btn0.addEventListener('click', () => {
    setNextQuestion()
})

btn1.addEventListener('click', () => {
    setNextQuestion()
})

btn2.addEventListener('click', () => {
    setNextQuestion()
})

btn3.addEventListener('click', () => {
    setNextQuestion()
})



function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    document.getElementById("questions").innerHTML = questions[questionCounter].question
    
    for (let i = 0; i < 4; i++) {
        document.getElementById(`btn${i}`).innerHTML = questions[questionCounter].options[i].text
    }
    questionCounter += 1

    
    
}


function setNextQuestion() {
    console.log (questionCounter)
    document.getElementById("questions").innerHTML = questions[questionCounter].question
    for (let i = 0; i < 4; i++) {
        document.getElementById(`btn${i}`).innerHTML = questions[questionCounter].options[i].text
    }
    questionCounter += 1
    checkAnswer()
}



function selectAnswers() {
    
}

function checkAnswer(){
if(questions == true){
    console.log('correct');
} else {
    console.log('wrong');
}
}

//timer starts

//wrong answers timer deducts 

//answers lead to next page 

//

//stores high scores