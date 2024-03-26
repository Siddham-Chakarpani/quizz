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
        question: " If CAT is coded as 312, how is DOG coded?",
        options: [
            "415",
            "514",
            "413",
            "314"
        ],
        correct: "514"
    },
    {
        id:"1",
        question: "Arrange the following words alphabetically: Elephant, Banana, Apple, Orange.",
        options: [
            "Apple, Banana, Elephant, Orange",
            "Banana, Apple, Elephant, Orange",
            "Apple, Banana, Orange, Elephant",
            "Banana, Orange, Apple, Elephant"
        ],
        correct: "Apple, Banana, Orange, Elephant"
    },
    {
        id:"2",
        question: "If the pattern is 5, 10, 15, 20, what comes next?",
        options: [
            "22",
            "25",
            "30",
            "18"
        ],
        correct: "30"
    },
    {
        id:"3",
        question: "If RED is written as 27, how is BLUE written?",
        options: [
            "41",
            "45",
            "56",
            "39"
        ],
        correct: "45"
    },
    {
        id:"4",
        question: "If a clock shows 3:15, what is the angle between the hour and minute hands?",
        options: [
            "45 degrees",
            "75 degrees",
            "90 degrees",
            "105 degrees"
        ],
        correct: "75 degrees"
    },
    {
        id:"5",
        question: " If all flowers are plants and some plants fade quickly, can it be concluded that some flowers fade quickly?",
        options: [
            "Yes",
            "No",
            "Maybe",
            "Cannot be determined"
        ],
        correct: "Yes"
    },
    {
        id:"6",
        question: "What comes next in the series: 2, 6, 12, 20, ___?",
        options: [
            "28",
            "30",
            "32",
            "36"
        ],
        correct: "28"
    },
    {
        id:"7",
        question: "If PEN is coded as 213, how is INK coded?",
        options: [
            "152",
            "125",
            "521",
            "215"
        ],
        correct: "215"
    },
    {
        id:"8",
        question: " If the day after tomorrow is a Sunday, what day is it today?",
        options:[
            "Monday",
            "Tuesday",
            "Saturday",
            "Wednesday"
        ],
        correct: "Saturday"
    },
    {
        id:"9",
        question: "If the pattern is 8, 12, 16, 20, what comes next?",
        options: [
            "22",
            "24",
            "25",
            "26"
        ],
        correct: "24"
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
        userScore.innerHTML="Your Score is " + scoreCount + "out of " + questionCount;
    }
    else{
        countOfQuestion.innerHTML=questionCount + 1 + "of" + quizArray.length + " Question";

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