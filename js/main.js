let currentQuestion = 1;
let tree = "";

let questions = [
    {
        question: "Are you more inclined towards frontend or backend development?",
        option1: "Frontend",
        option2: "Backend",
        treeBranch: ""
    },
    {
        question: "Do you enjoy working with databases and data manipulation?",
        option1: "Yes",
        option2: "No",
        treeBranch: ""
    },
    {
        question: "Do you have an interest in user interface design and user experience?",
        option1: "Yes",
        option2: "No",
        treeBranch: ""
    },
    {
        question: "Are you comfortable working with large data sets and conducting data analysis?",
        option1: "Yes",
        option2: "No",
        treeBranch: ""
    },
    {
        question: "Do you enjoy problem-solving and algorithmic thinking?",
        option1: "Yes",
        option2: "No",
        treeBranch: ""
    }
];

function startTest() {
    document.getElementById('startButton').style.display = "none";
    showQuestion(currentQuestion);
}

function showQuestion(questionNumber) {
    let question = questions[questionNumber - 1];
    let questionDiv = document.getElementById('question' + questionNumber);

    questionDiv.style.display = "block";
    document.getElementById('q' + questionNumber).innerHTML = question.question;
    document.getElementById('q' + questionNumber + '_option1').innerHTML = question.option1;
    document.getElementById('q' + questionNumber + '_option2').innerHTML = question.option2;
    document.getElementById('tree').innerHTML = tree;
}

function nextQuestion() {
    currentQuestion++;
    showQuestion(currentQuestion);
}

function calculateResult() {
    let resultDiv = document.getElementById('result');
    let result = "";

    let answer1 = document.querySelector('input[name="q1"]:checked');
    let answer2 = document.querySelector('input[name="q2"]:checked');
    let answer3 = document.querySelector('input[name="q3"]:checked');
    let answer4 = document.querySelector('input[name="q4"]:checked');
    let answer5 = document.querySelector('input[name="q5"]:checked');

    if (answer1 && answer2 && answer3 && answer4 && answer5) {
        let developerType = answer1.value;
        let dataInterest = answer2.value;
        let designInterest = answer3.value;
        let largeDataSets = answer4.value;
        let problemSolving = answer5.value;

        if (developerType === "q1_option1") {
            if (designInterest === "q3_option1") {
                result = "You might relate to a Frontend Developer with a focus on UI/UX.";
                questions[0].treeBranch = "└─ Frontend Developer (UI/UX)\n";
            } else {
                result = "You might relate to a Frontend Developer with a focus on coding and functionality.";
                questions[0].treeBranch = "└─ Frontend Developer (Coding)\n";
            }
        } else {
            if (dataInterest === "q2_option1" && largeDataSets === "q4_option1") {
                result = "You might relate to a Data Engineer or Data Scientist.";
                questions[0].treeBranch = "└─ Data Engineer / Data Scientist\n";
            } else if (dataInterest === "q2_option1" && largeDataSets === "q4_option2") {
                result = "You might relate to a Backend Developer with a focus on databases and data manipulation.";
                questions[0].treeBranch = "└─ Backend Developer (Database)\n";
            } else if (problemSolving === "q5_option1") {
                result = "You might relate to an Algorithm Engineer or Software Engineer.";
                questions[0].treeBranch = "└─ Backend Developer\n";
                questions[1].treeBranch = "  └─ Algorithm Engineer / Software Engineer\n";
            } else {
                result = "You might relate to a Backend Developer with a focus on server-side programming and system architecture.";
                questions[0].treeBranch = "└─ Backend Developer\n";
            }
        }

        resultDiv.innerHTML = "<p>" + result + "</p>";

        tree = generateTree();
        document.getElementById('tree').innerHTML = tree;
    }
}

function generateTree() {
    let tree = "";

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].treeBranch) {
            tree += questions[i].treeBranch;
        }
    }

    return tree;
}