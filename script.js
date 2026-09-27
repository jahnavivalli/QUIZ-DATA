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
    budgeter: 0,
    social: 0,
    mystery: 0,
    impulse: 0,
    spender: 0
};


// =====================================================
// START QUIZ
// =====================================================

function startQuiz() {

    document.getElementById("intro-screen").style.display = "none";

    document.getElementById("result-screen").style.display = "none";

    document.getElementById("data-screen").style.display = "none";

    document.getElementById("quiz-screen").style.display = "block";

    currentQuestion = 0;

    answers = [];

    archetypeScores = {
        saver: 0,
        budgeter: 0,
        social: 0,
        mystery: 0,
        impulse: 0,
        spender: 0
    };

    showQuestion();

}


// =====================================================
// SHOW QUESTION
// =====================================================

function showQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("question").textContent =
        q.question;


    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";


    q.options.forEach(
        function(option, index) {

            const button =
                document.createElement("button");

            button.textContent =
                option;

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

    const q =
        questions[currentQuestion];


    answers[currentQuestion] =
        q.options[index];


    if (q.type === "archetype") {

        const score =
            q.scores[index];


        for (
            const type in score
        ) {

            archetypeScores[type] +=
                score[type];

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
// FINISH QUIZ
// =====================================================

function finishQuiz() {

    document.getElementById("quiz-screen").style.display =
        "none";

    document.getElementById("result-screen").style.display =
        "block";


    calculateArchetype();

    calculateMatch();

}


// =====================================================
// GET USER ANSWER
// =====================================================

function getUserAnswer(questionIndex) {

    return answers[questionIndex];

}


// =====================================================
// CALCULATE MATCH
// =====================================================

function calculateMatch() {

    let matched = 0;


    // Q1
    const q1 =
        getUserAnswer(1);

    if (
        q1 === "Food"
    ) {

        matched++;

    }


    // Q2
    const q2 =
        getUserAnswer(2);

    if (
        q2 === "40–60%" ||
        q2 === "More than 60%"
    ) {

        matched++;

    }


    // Q3
    const q3 =
        getUserAnswer(4);

    if (
        q3 === "Rarely"
    ) {

        matched++;

    }


    // Q4
    const q4 =
        getUserAnswer(5);

    if (
        q4 === "Food / eating out" ||
        q4 === "Save it"
    ) {

        matched++;

    }


    const percentage =
        (matched / 4) * 100;


    document.getElementById(
        "match-percent"
    ).textContent =
        percentage + "%";


    document.getElementById(
        "match-count"
    ).textContent =
        `${matched} out of 4 survey questions matched the most common response.`;


    const table =
        document.getElementById(
            "comparison-table"
        );


    table.innerHTML = `

        <table>

            <thead>

                <tr>

                    <th>QUESTION</th>

                    <th>YOUR ANSWER</th>

                    <th>MOST COMMON</th>

                </tr>

            </thead>


            <tbody>

                <tr>

                    <td>What do you spend most of your money on?</td>

                    <td>${q1 || "—"}</td>

                    <td>Food — 16 / 17</td>

                </tr>


                <tr>

                    <td>How much goes toward your main expense?</td>

                    <td>${q2 || "—"}</td>

                    <td>40–60% OR more than 60% — 7 / 17 each</td>

                </tr>


                <tr>

                    <td>How often do you make impulse purchases?</td>

                    <td>${q3 || "—"}</td>

                    <td>Rarely — 35.3%</td>

                </tr>


                <tr>

                    <td>What would you do with ₹1,000?</td>

                    <td>${q4 || "—"}</td>

                    <td>Food OR save it — 35.3% each</td>

                </tr>

            </tbody>

        </table>

    `;

}


// =====================================================
// CALCULATE ARCHETYPE
// =====================================================

function calculateArchetype() {

    let highest = -Infinity;

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
                "A penny saved is a penny earned. — Benjamin Franklin"

        },


        impulse: {

            title: "🛍️ THE IMPULSE SPENDER",

            description:
                "Oops!... I did it again. — Oops!... I Did It Again · Britney Spears"

        },


        budgeter: {

            title: "📋 THE BUDGETER",

            description:
                "Failing to plan is planning to fail. — Common saying"

        },


        social: {

            title: "👯 THE SOCIAL SPENDER",

            description:
                "The more, the merrier. — Common saying"

        },


        spender: {

            title: "💸 THE SPENDER",

            description:
                "Money, money, money, must be funny, in a rich man's world. — Money, Money, Money · ABBA"

        },


        mystery: {

            title: "🕵️ THE MONEY MYSTERY",

            description:
                "Gone with the Wind. — Gone with the Wind"

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


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
