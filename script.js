// ---------- QUIZ DATA ----------

const questions = [

    // 1 — ARCHETYPE
    {
        question: "You see something you really want, but you weren't planning to buy it. What do you do?",
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


    // 2 — SURVEY
    {
        question: "What do you spend most of your money on?",
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


    // 3 — SURVEY
    {
        question: "Roughly what percentage of your spending goes toward your main expense?",
        options: [
            "Less than 20%",
            "20–40%",
            "40–60%",
            "More than 60%"
        ],
        type: "data"
    },


    // 4 — ARCHETYPE
    {
        question: "When you get your monthly or weekly money, what do you usually do?",
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


    // 5 — SURVEY
    {
        question: "How often do you make impulse purchases?",
        options: [
            "Never",
            "Rarely",
            "Sometimes",
            "Often",
            "Very often"
        ],
        type: "data"
    },


    // 6 — ARCHETYPE
    {
        question: "You and your friends are going out, but the plan is getting expensive. You...",
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
        question: "Which sentence sounds most like you?",
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
    },


    // 8 — ARCHETYPE
    {
        question: "At the end of the month, your financial situation is usually...",
        options: [
            "I'm thriving. I still have money.",
            "I'm fine. I have enough.",
            "I'm surviving. ✌️",
            "I'm borrowing from future me.",
            "What money?"
        ],
        type: "archetype",
        scores: [
            { saver: 3 },
            { budgeter: 2 },
            { spender: 1 },
            { spender: 2, impulse: 1 },
            { mystery: 3 }
        ]
    }

];


// ---------- SURVEY DATA ----------

// Q1
const surveyData = {

    q1: {
        question: "What do you spend most of your money on?",
        majority: "Food",
        answers: {
            "Food": "16/17",
            "Entertainment": "6/17",
            "Personal care": "6/17",
            "Shopping": "5/17",
            "Transport": "5/17",
            "Academics": "3/17",
            "Other": "1/17"
        }
    },


    // Q2
    q2: {
        question: "Approximately what percentage of your spending goes toward your main expense?",
        majority: "40–60% OR more than 60%",
        answers: {
            "Less than 20%": "1/17",
            "20–40%": "2/17",
            "40–60%": "7/17",
            "More than 60%": "7/17"
        }
    },


    // Q3
    q3: {
        question: "How often do you make impulse purchases?",
        majority: "Rarely",
        answers: {
            "Never": "11.8%",
            "Rarely": "35.3%",
            "Sometimes": "29.4%",
            "Often": "11.8%",
            "Very often": "11.8%"
        }
    },


    // Q4
    q4: {
        question: "If you suddenly received ₹1,000, what would you most likely spend it on?",
        majority: "Food OR save it",
        answers: {
            "Food / eating out": "35.3%",
            "Save it": "35.3%",
            "Shopping": "11.8%",
            "Entertainment": "11.8%",
            "Other": "5.9%"
        }
    }

};


// ---------- QUIZ VARIABLES ----------

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


// ---------- START QUIZ ----------

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

    showQuestion();
}


// ---------- SHOW QUESTION ----------

function showQuestion() {

    const questionData = questions[currentQuestion];

    document.getElementById("progress").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent =
        questionData.question;

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";


    questionData.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = function() {
            selectAnswer(index);
        };

        answersContainer.appendChild(button);

    });
}


// ---------- SELECT ANSWER ----------

function selectAnswer(index) {

    const questionData = questions[currentQuestion];


    answers.push({
        question: currentQuestion,
        answer: index
    });


    // Archetype scoring

    if (questionData.type === "archetype") {

        const selectedScores = questionData.scores[index];

        for (const archetype in selectedScores) {

            archetypeScores[archetype] +=
                selectedScores[archetype];

        }

    }


    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();

    }

}


// ---------- FINISH QUIZ ----------

function finishQuiz() {

    document.getElementById("quiz-screen").style.display = "none";

    document.getElementById("result-screen").style.display = "block";


    calculateMatch();

    calculateArchetype();

}


// ---------- CALCULATE MU MATCH ----------

function calculateMatch() {

    // Survey questions are question indexes:
    // Q2 = index 1
    // Q3 = index 2
    // Q4 = index 4
    //
    // Q1 and Q4 of the actual survey are compared
    // with the majority response.


    let matched = 0;

    const surveyResults = [];


    // SURVEY QUESTION 1
    const q1Answer = questions[1].options[
        answers.find(a => a.question === 1).answer
    ];

    const q1Match = q1Answer === "Food";

    if (q1Match) matched++;

    surveyResults.push({
        question: surveyData.q1.question,
        user: q1Answer,
        majority: surveyData.q1.majority,
        match: q1Match
    });


    // SURVEY QUESTION 2
    const q2Answer = questions[2].options[
        answers.find(a => a.question === 2).answer
    ];

    const q2Match =
        q2Answer === "40–60%" ||
        q2Answer === "More than 60%";

    if (q2Match) matched++;

    surveyResults.push({
        question: surveyData.q2.question,
        user: q2Answer,
        majority: surveyData.q2.majority,
        match: q2Match
    });


    // SURVEY QUESTION 3
    const q3Answer = questions[4].options[
        answers.find(a => a.question === 4).answer
    ];

    const q3Match = q3Answer === "Rarely";

    if (q3Match) matched++;

    surveyResults.push({
        question: surveyData.q3.question,
        user: q3Answer,
        majority: surveyData.q3.majority,
        match: q3Match
    });


    // SURVEY QUESTION 4
    //
    // We haven't added this question to the quiz yet.
    // For now, use the other three questions.
    //
    // We'll add the ₹1,000 question in the next step.


    const totalCompared = 3;

    const percentage = Math.round(
        (matched / totalCompared) * 100
    );


    document.getElementById("match-percent").textContent =
        percentage + "%";


    document.getElementById("match-count").textContent =
        `${matched} out of ${totalCompared} survey questions matched the most common response.`;


    document.getElementById("match-title").textContent =
        "YOUR MU MATCH";


    document.getElementById("match-description").textContent =
        "Here's how closely your answers matched the most common responses in our sample of 17 MU students.";


    createComparisonTable(surveyResults);

}


// ---------- COMPARISON TABLE ----------

function createComparisonTable(results) {

    const container =
        document.getElementById("comparison-table");


    let html = `

        <table>

            <thead>

                <tr>
                    <th>Question</th>
                    <th>Your answer</th>
                    <th>Most common response</th>
                    <th>Match</th>
                </tr>

            </thead>

            <tbody>
    `;


    results.forEach(function(result) {

        html += `

            <tr>

                <td>${result.question}</td>

                <td>${result.user}</td>

                <td>${result.majority}</td>

                <td>
                    ${result.match ? "✓" : "✗"}
                </td>

            </tr>

        `;

    });


    html += `

            </tbody>

        </table>

    `;


    container.innerHTML = html;

}


// ---------- ARCHETYPE ----------

function calculateArchetype() {

    let highest = 0;

    let result = "spender";


    for (const archetype in archetypeScores) {

        if (archetypeScores[archetype] > highest) {

            highest = archetypeScores[archetype];

            result = archetype;

        }

    }


    const archetypes = {

        saver: {
            title: "🏦 THE SAVER",
            description: "You'd rather keep your money than spend it immediately. Future-you is apparently your favourite person."
        },

        impulse: {
            title: "🛍️ THE IMPULSE SPENDER",
            description: "You see it. You want it. Suddenly your bank balance is somebody else's problem."
        },

        budgeter: {
            title: "📋 THE BUDGETER",
            description: "You actually think about where your money is going. Responsible behaviour detected."
        },

        social: {
            title: "👯 THE SOCIAL SPENDER",
            description: "A lot of your spending seems to happen when friends are involved. Experiences > bank balance."
        },

        spender: {
            title: "💸 THE SPENDER",
            description: "Money comes in. Money goes out. You deal with the consequences later."
        },

        mystery: {
            title: "🕵️ THE MONEY MYSTERY",
            description: "You had money. Then you didn't. Nobody knows what happened. Not even you."
        }

    };


    document.getElementById("archetype-title").textContent =
        archetypes[result].title;

    document.getElementById("archetype-description").textContent =
        archetypes[result].description;

}


// ---------- SHOW DATA ----------

function showData() {

    document.getElementById("result-screen").style.display = "none";

    document.getElementById("data-screen").style.display = "block";


    const container =
        document.getElementById("data-content");


    container.innerHTML = `

        <div class="data-section">

            <h2>🍔 WHAT DO MU STUDENTS SPEND ON?</h2>

            <p><strong>16 / 17</strong> chose food / eating out.</p>
            <p><strong>6 / 17</strong> chose entertainment.</p>
            <p><strong>6 / 17</strong> chose personal care.</p>
            <p><strong>5 / 17</strong> chose shopping.</p>
            <p><strong>5 / 17</strong> chose transport.</p>
            <p><strong>3 / 17</strong> chose academics.</p>
            <p><strong>1 / 17</strong> chose other.</p>

        </div>


        <div class="data-section">

            <h2>📊 HOW MUCH GOES TOWARD THE MAIN EXPENSE?</h2>

            <p><strong>1 / 17</strong> — Less than 20%</p>
            <p><strong>2 / 17</strong> — 20–40%</p>
            <p><strong>7 / 17</strong> — 40–60%</p>
            <p><strong>7 / 17</strong> — More than 60%</p>

        </div>


        <div class="data-section">

            <h2>🛒 HOW OFTEN DO STUDENTS IMPULSE BUY?</h2>

            <p><strong>11.8%</strong> — Never</p>
            <p><strong>35.3%</strong> — Rarely</p>
            <p><strong>29.4%</strong> — Sometimes</p>
            <p><strong>11.8%</strong> — Often</p>
            <p><strong>11.8%</strong> — Very often</p>

        </div>


        <div class="data-section">

            <h2>₹ WHAT WOULD THEY DO WITH ₹1,000?</h2>

            <p><strong>35.3%</strong> — Food / eating out</p>
            <p><strong>35.3%</strong> — Save it</p>
            <p><strong>11.8%</strong> — Shopping</p>
            <p><strong>11.8%</strong> — Entertainment</p>
            <p><strong>5.9%</strong> — Other</p>

        </div>

    `;

}
