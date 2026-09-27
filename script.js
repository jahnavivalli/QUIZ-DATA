// =====================================================
// QUIZ QUESTIONS
// =====================================================

const questions = [

    // 0 — ARCHETYPE

    {
        question:
            "You see something you really want, but you weren't planning to buy it. What do you do?",

        options: [
            "Buy it 🤩.",
            "Add it to my cart and think about it later.",
            "Wait a few days and decide.",
            "Check my balance first.",
            "Forget about it."
        ],

        type: "archetype",

        scores: [
            { spender: 2, impulse: 2 },
            { impulse: 1 },
            { budgeter: 2 },
            { saver: 2, budgeter: 1 },
            { saver: 1 }
        ]
    },


    // 1 — SURVEY Q1

    {
        question:
            "What do you spend most of your money on?",

        options: [
            "Food",
            "Shopping",
            "Entertainment",
            "Transport",
            "Personal care",
            "Academics"
        ],

        type: "data"
    },


    // 2 — SURVEY Q2

    {
        question:
            "Roughly what percentage of your spending goes toward your main expense?",

        options: [
            "Less than 20%",
            "20–40%",
            "40–60%",
            "More than 60%"
        ],

        type: "data"
    },


    // 3 — ARCHETYPE

    {
        question:
            "When you get your monthly or weekly money, what do you usually do?",

        options: [
            "Spend in the moment and figure it out later 🤙.",
            "Have a rough idea of where it'll go.",
            "Immediately set some aside.",
            "Spend but track all purchases.",
            "It disappears and I don't know how 🤩."
        ],

        type: "archetype",

        scores: [
            { spender: 2, impulse: 1 },
            { budgeter: 2 },
            { saver: 2 },
            { budgeter: 3 },
            { mystery: 3 }
        ]
    },


    // 4 — SURVEY Q3

    {
        question:
            "How often do you make impulse purchases?",

        options: [
            "Never",
            "Rarely",
            "Sometimes",
            "Often",
            "Very often"
        ],

        type: "data"
    },


    // 5 — SURVEY Q4

    {
        question:
            "If you suddenly received ₹1,000, what would you most likely spend it on?",

        options: [
            "Food / eating out",
            "Save it",
            "Shopping",
            "Entertainment",
            "Other"
        ],

        type: "data"
    },


    // 6 — ARCHETYPE

    {
        question:
            "You and your friends are going out, but the plan is getting expensive. You...",

        options: [
            "Still go. It's worth it.",
            "Suggest somewhere cheaper.",
            "Go but spend as little as possible.",
            "Drop out of the plan.",
            "Somehow convince everyone to do something else."
        ],

        type: "archetype",

        scores: [
            { social: 3, spender: 1 },
            { budgeter: 2 },
            { saver: 2 },
            { saver: 2 },
            { budgeter: 1, social: 1 }
        ]
    },


    // 7 — ARCHETYPE

    {
        question:
            "Which sentence sounds most like you?",

        options: [
            "Money is meant to be spent.",
            "I deserve a little treat.",
            "I'll save what's left.",
            "I should probably stop spending.",
            "I have no idea where my money went."
        ],

        type: "archetype",

        scores: [
            { spender: 3 },
            { impulse: 3 },
            { saver: 3 },
            { impulse: 1, spender: 1 },
            { mystery: 3 }
        ]
    }

];


// =====================================================
// VARIABLES
// =====================================================

let currentQuestion = 0;

let answers = [];

let archetypeScores = {
    saver: 0,
    impulse: 0,
    budgeter: 0,
    social: 0,
    spender: 0,
    mystery: 0
};


// =====================================================
// START
// =====================================================

function startQuiz() {

    currentQuestion = 0;

    answers = [];

    archetypeScores = {
        saver: 0,
        impulse: 0,
        budgeter: 0,
        social: 0,
        spender: 0,
        mystery: 0
    };


    document.getElementById("intro-screen").style.display = "none";

    document.getElementById("result-screen").style.display = "none";

    document.getElementById("data-screen").style.display = "none";

    document.getElementById("quiz-screen").style.display = "block";


    window.scrollTo(0, 0);


    showQuestion();

}


// =====================================================
// SHOW QUESTION
// =====================================================

function showQuestion() {

    const questionData =
        questions[currentQuestion];


    document.getElementById("progress").textContent =
        `${currentQuestion + 1} / ${questions.length}`;


    document.getElementById("question-number").textContent =
        String(currentQuestion + 1);


    document.getElementById("question").textContent =
        questionData.question;


    const answersContainer =
        document.getElementById("answers");


    answersContainer.innerHTML = "";


    questionData.options.forEach(
        function(option, index) {

            const button =
                document.createElement("button");


            button.textContent = option;


            button.onclick =
                function() {

                    selectAnswer(index);

                };


            answersContainer.appendChild(button);

        }
    );

}


// =====================================================
// SELECT ANSWER
// =====================================================

function selectAnswer(index) {

    const questionData =
        questions[currentQuestion];


    answers.push({

        question: currentQuestion,

        answer: index

    });


    if (
        questionData.type === "archetype"
    ) {

        const selectedScores =
            questionData.scores[index];


        for (
            const archetype in selectedScores
        ) {

            archetypeScores[archetype] +=
                selectedScores[archetype];

        }

    }


    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        showQuestion();

    } else {

        finishQuiz();

    }

}


// =====================================================
// FINISH
// =====================================================

function finishQuiz() {

    document.getElementById("quiz-screen").style.display = "none";

    document.getElementById("result-screen").style.display = "block";


    calculateMatch();

    calculateArchetype();


    window.scrollTo(0, 0);

}


// =====================================================
// GET ANSWER
// =====================================================

function getUserAnswer(questionIndex) {

    const answer =
        answers.find(
            a => a.question === questionIndex
        );


    return questions[questionIndex]
        .options[answer.answer];

}


// =====================================================
// CALCULATE MATCH
// =====================================================

function calculateMatch() {

    let matched = 0;

    const surveyResults = [];


    // Q1

    const q1Answer =
        getUserAnswer(1);


    const q1Match =
        q1Answer === "Food";


    if (q1Match) {

        matched++;

    }


    surveyResults.push({

        question:
            "What do you spend most of your money on?",

        user:
            q1Answer,

        majority:
            "Food / eating out — 16 / 17",

        match:
            q1Match

    });


    // Q2

    const q2Answer =
        getUserAnswer(2);


    const q2Match =
        q2Answer === "40–60%" ||
        q2Answer === "More than 60%";


    if (q2Match) {

        matched++;

    }


    surveyResults.push({

        question:
            "What percentage goes toward your main expense?",

        user:
            q2Answer,

        majority:
            "40–60% OR more than 60% — 7 / 17 each",

        match:
            q2Match

    });


    // Q3

    const q3Answer =
        getUserAnswer(4);


    const q3Match =
        q3Answer === "Rarely";


    if (q3Match) {

        matched++;

    }


    surveyResults.push({

        question:
            "How often do you make impulse purchases?",

        user:
            q3Answer,

        majority:
            "Rarely — 35.3%",

        match:
            q3Match

    });


    // Q4

    const q4Answer =
        getUserAnswer(5);


    const q4Match =
        q4Answer === "Food / eating out" ||
        q4Answer === "Save it";


    if (q4Match) {

        matched++;

    }


    surveyResults.push({

        question:
            "What would you do with ₹1,000?",

        user:
            q4Answer,

        majority:
            "Food OR save it — 35.3% each",

        match:
            q4Match

    });


    // SCORE

    const percentage =
        Math.round(
            (matched / 4) * 100
        );


    document.getElementById("match-percent")
        .textContent =
        percentage + "%";


    document.getElementById("match-count")
        .textContent =
        `${matched} out of 4 survey questions matched the most common response.`;


    createComparisonTable(
        surveyResults
    );

}


// =====================================================
// COMPARISON TABLE
// =====================================================

function createComparisonTable(results) {

    const container =
        document.getElementById(
            "comparison-table"
        );


    let html = `

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>
                            Survey question
                        </th>

                        <th>
                            Your answer
                        </th>

                        <th>
                            Most common response
                        </th>

                        <th>
                            Match
                        </th>

                    </tr>

                </thead>

                <tbody>

    `;


    results.forEach(
        function(result) {

            html += `

                <tr>

                    <td>
                        ${result.question}
                    </td>

                    <td>
                        ${result.user}
                    </td>

                    <td>
                        ${result.majority}
                    </td>

                    <td class="${
                        result.match
                            ? "match-yes"
                            : "match-no"
                    }">

                        ${
                            result.match
                                ? "✓"
                                : "—"
                        }

                    </td>

                </tr>

            `;

        }
    );


    html += `

                </tbody>

            </table>

        </div>

    `;


    container.innerHTML = html;

}


// =====================================================
// ARCHETYPE
// =====================================================

function calculateArchetype() {

    let highest = -1;

    let result = "spender";


    for (
        const archetype in archetypeScores
    ) {

        if (
            archetypeScores[archetype] >
            highest
        ) {

            highest =
                archetypeScores[archetype];

            result =
                archetype;

        }

    }


    const archetypes = {

        saver: {

            title: "🏦 THE SAVER",

            description:
                "You'd rather keep your money than spend it immediately. Future-you is apparently your favourite person."

        },


        impulse: {

            title: "🛍️ THE IMPULSE SPENDER",

            description:
                "You see it. You want it. Suddenly your bank balance is somebody else's problem."

        },


        budgeter: {

            title: "📋 THE BUDGETER",

            description:
                "You actually think about where your money is going. Responsible behaviour detected."

        },


        social: {

            title: "👯 THE SOCIAL SPENDER",

            description:
                "A lot of your spending seems to happen when friends are involved. Experiences > bank balance."

        },


        spender: {

            title: "💸 THE SPENDER",

            description:
                "Money comes in. Money goes out. You deal with the consequences later."

        },


        mystery: {

            title: "🕵️ THE MONEY MYSTERY",

            description:
                "You had money. Then you didn't. Nobody knows what happened. Not even you."

        }

    };


    document.getElementById(
        "archetype-title"
    ).textContent =
        archetypes[result].title;


    document.getElementById(
        "archetype-description"
    ).textContent =
        archetypes[result].description;

}


// =====================================================
// SHOW DATA
// =====================================================

function showData() {

    document.getElementById(
        "result-screen"
    ).style.display = "none";


    document.getElementById(
        "data-screen"
    ).style.display = "block";


    window.scrollTo(0, 0);

}
