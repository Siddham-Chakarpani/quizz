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
        question: "The probability of event equal to zero is called;?",
        options: [
            "unsure event",
            "sure event",
            "possible event",
            "impossible event"
        ],
        correct: "impossible event"
    },    

            

            
     
    {
        id:"1",
        question: " The probability that cannot exist among the following:?",
        options: [
            "0.5",
            "2/7",
            "-0.5",
            "+2/9"
        ],
        correct: "0.5"
    },
    {
        id:"2",
        question: "If P(E) = 0.07, then what is the probability of 'NOT E,?",
        options: [
            "0.93",
            "0.89",
            "0.83",
            "0.90",
        ],
        correct: " 0.93"
    },
    {
        id:"3",
        question: ". A bag has 3 red balls and 5 green balls. If we take a ball from the bag, then what is the probability of getting red balls only?",
        options: [
            "3",
            "8/3",
            "3/8",
            "3/9"
        ],
        correct: "3/8"
    },
    {
        id:"4",
        question: " 1 - cos2A is equal to?",
        options: [
            "sin2A",
            "tan2A",
            "1 - sin2A",
            "sec2A"
        ],
        correct: "sin2A"
    },
    {
        id:"5",
        question: "  sin (90° - A) and cos A are?",
        options: [
            "same",
            "not same",
            "not defined",
            " none of these"
        ],
        correct: "same"
    },
    {
        id:"6",
        question: " If r is the radius of the sphere, then the surface area of the sphere is given by?",
        options: [
            "2 π ",
            "4/3 π r2",
            "4 π r",
            "4 π r2"
        ],
        correct: "4 π r2"
    },
    {
        id:"7",
        question: " If we change the shape of an object from a sphere to a cylinder, then the volume of cylinder will:",
        options: [
            "Remained unchanged",
            "Increases",
            "Decreases",
            "Doubles"
        ],
        correct: " Increases"
    },
    {
        id:"8",
        question: "A tank is made of the shape of a cylinder with a hemispherical depression at one end. The height of the cylinder is 1.45 m and radius is 30 cm. The total surface area of the tank is",
        options: [
            "3m",
            "3.3m",
            "30.3m",
            "30m"
        ],
        correct: "3.3m"
    },
    {
        id:"9",
        question: "The first term and common difference for the A.P. 3, 1, -1, -3 is?",
        options: [
            "3 and -2",
            "3 and -1",
            "3 and 2",
            "3 and -3"
        ],
        correct: "3 and -2"
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