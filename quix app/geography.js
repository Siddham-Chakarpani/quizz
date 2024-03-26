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
        question: "What is the capital city of Australia?",
        options: [
            "Sydney",
            "Melbourne",
            "Canberra",
            "Brisbane"
        ],
        correct: "Canberra"
    },
    {
        id:"1",
        question: "Which river is the longest in the world?",
        options: [
            "Amazon",
            "Nile",
            "Yangtze",
            "Mississippi"
        ],
        correct: "Nile"
    },
    {
        id:"2",
        question: "In which continent is the Sahara Desert located?",
        options: [
            "South America",
            "Africa",
            "Asia",
            "Australia"
        ],
        correct: "Africa"
    },
    {
        id:"3",
        question: "What is the highest mountain in the world?",
        options: [
            "K2",
            "Mount Everest",
            "Kangchenjunga",
            "Lhotse"
        ],
        correct: "Mount Everest"
    },
    {
        id:"4",
        question: "Which ocean is the largest?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Southern Ocean",
            "Pacific Ocean"
        ],
        correct: "Pacific Ocean"
    },
    {
        id:"5",
        question: "What is the capital city of Japan?",
        options: [
            "Seoul",
            "Beijing",
            "Tokyo",
            "Bangkok"
        ],
        correct: "Tokyo"
    },
    {
        id:"6",
        question: "Which country is known as the Land of the Rising Sun?",
        options: [
            "China",
            "Japan",
            "South Korea",
            "Vietnam"
        ],
        correct: "Japan"
    },
    {
        id:"7",
        question: "The Great Barrier Reef is located off the coast of which country?",
        options: [
            "Brazil",
            "Australia",
            "Mexico",
            "Thailand"
        ],
        correct: "Australia"
    },
    {
        id:"8",
        question: "What is the capital city of Canada?",
        options:[
            "Vancouver",
            "Ottawa",
            "Toronto",
            "Montreal"
        ],
        correct: "Ottawa"
    },
    {
        id:"9",
        question: "Which mountain range separates Europe from Asia?",
        options: [
            "Rocky Mountains",
            "Himalayas",
            "Alps",
            "Ural Mountains"
        ],
        correct: "Ural Mountains"
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