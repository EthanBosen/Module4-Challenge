const quizData = [
    {
        question: "Who won the MVP in 2022-2023 season?",
        a: "Patrick Mahomes",
        b: "Larry Cullpepper",
        c: "Lamar Jackson",
        d: "Desmond Ridder",
        correct: "a",
    },
    {
        question: "Which team won the Superbowl in 2022-2023 season?",
        a: "Los Angeles Rams",
        b: "Kansas City Chiefs",
        c: "New England Patriots",
        d: "Atlanta Falcons",
        correct: "b",
    },
    {
        question: "Who is the oldest active Head Coach in the NFL?",
        a: "Pete Carroll",
        b: "Bill Belichick",
        c: "Sean McVay",
        d: "Arthur Smith",
        correct: "a",
    },
    {
        question: "Who had the most Touchdowns in the 2022-2023 season?",
        a: "Drake London",
        b: "Devonte Adams",
        c: "Travis Kelce",
        d: "Stefon Diggs",
        correct: "b",
    },
];
const quiz= document.getElementById('Quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('Sumbit')
let currentQuiz = 0
let score = 0

let questions = 
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    let currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = true)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
}