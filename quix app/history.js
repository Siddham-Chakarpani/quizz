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
        question: "Which ancient Indian civilization is known for its advanced urban planning and drainage systems?",
        options: [
            "Harappan",
            "Mauryan",
            "Gupta",
            "Chola"
        ],
        correct: "Harappan"
    },
    {
        id:"1",
        question: "Who was the first Mughal Emperor of India?",
        options: [
            "Babur",
            "Akbar",
            "Jahangir",
            "Humayun"
        ],
        correct: "Babur"
    },
    {
        id:"2",
        question: "Who led the nonviolent movement for India's independence from British colonial rule?",
        options: [
            "Mahatma Gandhi",
            "Subhas Chandra Bose",
            "Jawaharlal Nehru",
            "Sardar Vallabhbhai Patel"
        ],
        correct: " Mahatma Gandhi"
    },
    {
        id:"3",
        question: " When did India gain independence from British rule?",
        options: [
            "1945",
            "1947",
            "1950",
            "1962"
        ],
        correct: "1947"
    },
    {
        id:"4",
        question: "Which ancient Indian epic is attributed to the sage Vyasa?",
        options: [
            "Ramayana",
            "Mahabharata",
            "Rigveda",
            "Upanishads"
        ],
        correct: "Mahabharata"
    },
    {
        id:"5",
        question: "  Who was the first female Prime Minister of India?",
        options: [
            "Indira Gandhi",
            "Sonia Gandhi",
            "Priyanka Gandhi",
            " Mamata Banerjee"
        ],
        correct: "Indira Gandhi"
    },
    {
        id:"6",
        question: "Which famous Mauryan emperor is known for his rock edicts and promotion of Buddhism?",
        options: [
            "Chandragupta Maurya",
            "Ashoka",
            "Bindusara",
            "Harsha"
        ],
        correct: "Ashoka"
    },
    {
        id:"7",
        question: "The Golden Age of Gupta dynasty is known for:",
        options: [
            "Great achievements in art, science, and literature",
            "Expansion of the empire through military conquests",
            "Adoption of Jainism as the state religion",
            "Introduction of a new currency system"
        ],
        correct: " Great achievements in art, science, and literature"
    },
    {
        id:"8",
        question: "Who was the leader of the Indian National Army (INA) during World War II?",
        options: [
            "Subhas Chandra Bose",
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
            "Sardar Patel"
        ],
        correct: "Subhas Chandra Bose"
    },
    {
        id:"9",
        question: "Which famous Indian mathematician and astronomer wrote the treatise 'Aryabhatiya'?",
        options: [
            "Aryabhata",
            "Bhaskara I",
            "Varahamihira",
            "Brahmagupta"
        ],
        correct: "Aryabhata"
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