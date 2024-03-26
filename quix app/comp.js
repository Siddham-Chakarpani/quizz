var questions = [{
	"question": "The Indian national emblem Lion Capital of Ashokais adapted from which ancient monument ?",
	"option1": "Sanchi Stupa",
	"option2": "Ajanta Caves",
	"option3": "Qutub Minar",
	"option4": "Ellora Caves",
	"answer": "2"
}, {
	"question": "The Indian Constitution was adopted on:?",
	"option1": "15th August 1947",
	"option2": "26th January 1950",
	"option3": "2nd October 1949",
	"option4": "14th November 1947",
	"answer": "3"
}, {
	"question": "Which is a single integrated circuit?",
	"option1": "Gate",
	"option2": "Mother Board",
	"option3": "Chip",
	"option4": "CPU",
	"answer": "1"
}, {
	"question": "C is ?",
	"option1": "A third generation high level language",
	"option2": "A machine language",
	"option3": "An assembly language",
	"option4": "All of the above",
	"answer": "1"
}, {
	"question": "Which sentence demonstrates correct punctuation ?",
	"option1": "Are you coming to the party, or not?",
	"option2": "How are you, doing today?",
	"option3": "The cat is black, white and fluffy.",
	"option4": "I want to go out but, it's raining.",
	"answer": "1"
}, {
	"question": "Identify the sentence with the correct use of the indefinite article:",
	"option1": "I need an umbrella for this weather.",
	"option2": " She bought a new furnitures for her house.",
	"option3": "I'll have a coffee and an tea, please ",
	"option4": "He has an oranges in his bag.",
	"answer": "1"
}, {
	"question": "What property of an object is determined by its mass and velocity?",
    "option1": "Accelerstion",
	"option2": "Force",
	"option3": "Momemtum",
	"option4": "Power",
	"answer": "3"
}, {
	"question": "What is the SI unit for measuring work and energy ?",
	"option1": "Watt",
	"option2": "Joule",
	"option3": "Momemtum",
	"option4": "Power",
	"answer": "1"
}, {
	"question": "What is the smallest unit of an element that retains its chemical properties?",
	"option1": "Atom",
	"option2": "MOlecule",
	"option3": "Compound",
	"option4": "Electrons",
	"answer": "1"
}, {
	"question": "What is the pH value of a neutral solution?",
	"option1": "7",
	"option2": "0",
	"option3": "14",
	"option4": "1",
	"answer": "1"
}];


var appContainer = document.getElementById('cont'),
	questionEl = document.getElementById('question'),
	opt1 = document.getElementById('opt1'),
	opt2 = document.getElementById('opt2'),
	opt3 = document.getElementById('opt3'),
	opt4 = document.getElementById('opt4'),
	nxtBtn = document.getElementById('next'),
	result = document.getElementById('result'),
	
	currentQuestion = 0,
	totQuestions = questions.length,
	score = 0;


function loadQuestion(questionIndex) {
	'use strict';
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
}

function loadNextQuestion() {
	'use strict';
	var selectedOption = document.querySelector('input[type=radio]:checked'),
		answer;
	if (!selectedOption) {
		alert('Please Select Your Answer');
		return;
	}
	answer = selectedOption.value;
	if (questions[currentQuestion].answer === answer) {
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion += 1;
	if (currentQuestion === totQuestions - 1) {
		nxtBtn.textContent = 'Finish';
	}
	
	if (currentQuestion === totQuestions) {
		appContainer.style.display = 'none';
		result.style.display = '';
		result.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);