let timeleft = document.querySelector(".time-left");
let quizContainer=document.getElementById("container");
let nextBtn=document.getElementById("next-button");
let countOfQuestion=document.querySelector(".number-of-question");
let displayContainer= document.getElementById("display-container");
let scoreContainer=document.querySelector(".score-container");
let restart=document.getElementById("restart");
let userScore=document.getElementById("user-score");
let startScreen=document.querySelector(".start-screen");
let startButton=document.getElementById("start-button");
let questionCount;
let scoreCount=0;
let count=11;
let countdown;

// 10 questions with options and answer array
const quizArray=[
    {
        id:"0",
        question: " Who is the author of 'To Kill a Mockingbird'?",
        options: [
            "J.K. Rowling",
            "Harper Lee",
            "George Orwell",
            "Ernest Hemingway"
        ],
        correct: "Harper Lee"
    },
    {
        id:"1",
        question: "What is the capital of France?",
        options: [
            "Rome",
            "Berlin",
            "Paris",
            "Madrid"
        ],
        correct: "Paris"
    },
    {
        id:"2",
        question: " In which year did World War II end?",
        options: [
            "1945",
            "1939",
            "1941",
            "1950"
        ],
        correct: " 1945"
    },
    {
        id:"3",
        question: " What is the largest planet in our solar system?",
        options: [
            "Venus",
            "Mars",
            "Jupiter",
            "Saturn"
        ],
        correct: "Jupiter"
    },
    {
        id:"4",
        question: "Who painted the Mona Lisa?",
        options: [
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Michelangelo"
        ],
        correct: "Leonardo da Vinci"
    },
    {
        id:"5",
        question: "Which planet is known as the Red Planet?",
        options: [
            "Mars",
            "Jupiter",
            "Saturn",
            "  Earth"
        ],
        correct: "Mars"
    },
    {
        id:"6",
        question: "What is the currency of Japan?",
        options: [
            "Yuan",
            "Yen",
            "Won",
            "Ringgit"
        ],
        correct: "Yen"
    },
    {
        id:"7",
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
            "Charles Dickens",
            "William Shakespeare",
            "Jane Austen",
            "Mark Twain"
        ],
        correct: "William Shakespeare"
    },
    {
        id:"8",
        question: "What is the longest river in the world?",
        options:[
            "Nile",
            "Amazon",
            "Mississippi",
            "Yangtze"
        ],
        correct: "Nile"
    },
    {
        id:"9",
        question: "What is the capital of Australia?",
        options: [
            "Sydney",
            "Canberra",
            "Melbourne",
            "Brisbane"
        ],
        correct: "Canberra"
    },
];

restart.addEventListener("click", ()=>{
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", (displayNext = ()=>{
    questionCount+=1;

    if (questionCount == quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML="Your Score is " + scoreCount + " out of " + questionCount;
    }
    else{
        countOfQuestion.innerHTML=questionCount + 1 + " of" + quizArray.length + " Question";

        quizDisplay(questionCount);
        count=11;
        clearInterval(countdown);
        timerDisplay();
    }
})
);

const timerDisplay=() =>{
    countdown = setInterval(() =>{
        count--;
        timeleft.innerHTML = `${count}s`;
        if(count ==0){
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount)=>{
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card)=>{
        card.classList.add("hide");
    });
      quizCards[questionCount].classList.remove("hide");
};

function quizCreater(){
    quizArray.sort(() => Math.random() - 0.5);

    for(let i of quizArray){
        i.options.sort(()=> Math.random() - 0.5);
        let div= document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + "Question";
        
        let question_DIV = document.createElement("p"); 
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        
        div.innerHTML += `
        <button class ="option-div" onclick="checker(this)">
        ${i.options[0]}</button>
        <button class ="option-div" onclick="checker(this)">
        ${i.options[1]}</button>
        <button class ="option-div" onclick="checker(this)">
        ${i.options[2]}</button>
        <button class ="option-div" onclick="checker(this)">
        ${i.options[3]}</button>
        `;

        quizContainer.appendChild(div);
    }
}

function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if(userSolution == quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }
    else{
        userOption.classList.add("incorrect");

    //        options.forEach((element) => {
    //         if (element.innerText = quizArray[questionCount].correct){
    //                 element.classList.add("correct");
             
    // }
    //     });
    }

    clearInterval(countdown);
    options.forEach((element)=>{
        element.disabled = true;
    });
}

function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    //scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () =>{
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () =>{
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
}