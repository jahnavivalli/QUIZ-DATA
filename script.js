// =====================================================
// QUIZ DATA
// =====================================================

const questions = [

    // ---------- ARCHETYPE 1 ----------

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


    // ---------- SURVEY 1 ----------

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


    // ---------- SURVEY 2 ----------

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


    // ---------- ARCHETYPE 2 ----------

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


    // ---------- SURVEY 3 ----------

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


    // ---------- SURVEY 4 ----------

    {
        question: "If you suddenly received ₹1,000, what would you most likely spend it on?",

        options: [
            "Food / eating out",
            "Save it",
            "Shopping",
            "Entertainment",
            "Other"
        ],

        type: "data"
    },


    // ---------- ARCHETYPE 3 ----------

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


    // ---------- ARCHETYPE 4 ----------

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
    }

];


// =====================================================
// ACTUAL SURVEY DATA
// =====================================================

const surveyData = {

    q1: {
        question: "What do you spend most of your money on?",

        majority: "Food",

        answers: {
            "Food / eating out": "16 / 17 — 94.1%",
            "Entertainment": "6 / 17 — 35.3%",
            "Personal care": "6 / 17 — 35.3%",
            "Shopping": "5 / 17 — 29.4%",
            "Transport": "5 / 17 — 29.4%",
            "Academics": "3 / 17 — 17.6%",
            "Other": "1 / 17 — 5.9%"
        }
    },


    q2: {
        question: "Approximately what percentage of your spending goes toward your main expense?",

        majority: "40–60% and More than 60% — tied",

        answers: {
            "Less than 20%": "1 / 17",
            "20–40%": "2 / 17",
            "40–60%": "7 / 17",
            "More than 60%": "7 / 17"
        }
    },


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


    q4: {
        question: "If you suddenly received ₹1,000, what would you most likely spend it on?",

        majority: "Food / eating out OR Save it — tied",

        answers: {
            "Food / eating out": "35.3%",
            "Save it": "35.3%",
            "Shopping": "11.8%",
            "Entertainment": "11.8%",
            "Other": "5.9%"
        }
    }

};


// =====================================================
// QUIZ VARIABLES
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

    showQuestion();
}


// =====================================================
// SHOW QUESTION
// =====================================================

function showQuestion() {

    const questionData = questions[currentQuestion];

    document.getElementById("progress").textContent =
        `QUESTION ${currentQuestion + 1} OF ${questions.length}`;

    document.getElementById("question").textContent =
        questionData.question;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";


    questionData.options.forEach(function(option, index) {

        const button =
            document.createElement("button");

        button.textContent = option;

        button.onclick = function() {
            selectAnswer(index);
        };

        answersContainer.appendChild(button);

    });
}


// =====================================================
// SELECT ANSWER
// =====================================================

function selectAnswer(index) {

    const questionData = questions[currentQuestion];


    answers.push({
        question: currentQuestion,
        answer: index
    });


    if (questionData.type === "archetype") {

        const selectedScores =
            questionData.scores[index];


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


// =====================================================
// FINISH QUIZ
// =====================================================

function finishQuiz() {

    document.getElementById("quiz-screen").style.display = "none";

    document.getElementById("result-screen").style.display = "block";

    calculateMatch();

    calculateArchetype();

}


// =====================================================
// GET USER ANSWER
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
// CALCULATE MU MATCH
// =====================================================

function calculateMatch() {

    let matched = 0;

    const surveyResults = [];


    // -------------------------
    // Q1
    // -------------------------

    const q1Answer = getUserAnswer(1);

    const q1Match =
        q1Answer === "Food";

    if (q1Match) {
        matched++;
    }


    surveyResults.push({
        question: surveyData.q1.question,
        user: q1Answer,
        majority: "Food / eating out — 16 / 17",
        match: q1Match
    });


    // -------------------------
    // Q2
    // -------------------------

    const q2Answer = getUserAnswer(2);

    const q2Match =
        q2Answer === "40–60%" ||
        q2Answer === "More than 60%";

    if (q2Match) {
        matched++;
    }


    surveyResults.push({
        question: surveyData.q2.question,
        user: q2Answer,
        majority: "40–60% OR More than 60% — 7 / 17 each",
        match: q2Match
    });


    // -------------------------
    // Q3
    // -------------------------

    const q3Answer = getUserAnswer(4);

    const q3Match =
        q3Answer === "Rarely";

    if (q3Match) {
        matched++;
    }


    surveyResults.push({
        question: surveyData.q3.question,
        user: q3Answer,
        majority: "Rarely — 35.3%",
        match: q3Match
    });


    // -------------------------
    // Q4
    // -------------------------

    const q4Answer = getUserAnswer(5);

    const q4Match =
        q4Answer === "Food / eating out" ||
        q4Answer === "Save it";

    if (q4Match) {
        matched++;
    }


    surveyResults.push({
        question: surveyData.q4.question,
        user: q4Answer,
        majority: "Food OR Save it — 35.3% each",
        match: q4Match
    });


    // -------------------------
    // FINAL SCORE
    // -------------------------

    const percentage =
        Math.round((matched / 4) * 100);


    document.getElementById("match-percent").textContent =
        percentage + "%";


    document.getElementById("match-count").textContent =
        `${matched} out of 4 survey questions matched the most common response.`;


    document.getElementById("match-title").textContent =
        "YOUR MU MATCH";


    document.getElementById("match-description").textContent =
        "How closely did you match the most common responses from our sample of 17 MU students?";


    createComparisonTable(surveyResults);

}


// =====================================================
// COMPARISON TABLE
// =====================================================

function createComparisonTable(results) {

    const container =
        document.getElementById("comparison-table");


    let html = `

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>
                        <th>Survey question</th>
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

                <td class="${result.match ? "match-yes" : "match-no"}">

                    ${result.match ? "✓" : "✗"}

                </td>

            </tr>

        `;

    });


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


    for (const archetype in archetypeScores) {

        if (archetypeScores[archetype] > highest) {

            highest =
                archetypeScores[archetype];

            result = archetype;

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


    document.getElementById("archetype-title").textContent =
        archetypes[result].title;


    document.getElementById("archetype-description").textContent =
        archetypes[result].description;

}


// =====================================================
// SHOW DATA
// =====================================================

function showData() {

    document.getElementById("result-screen").style.display = "none";

    document.getElementById("data-screen").style.display = "block";


    const container =
        document.getElementById("data-content");


    container.innerHTML = `


        <!-- ================= Q1 ================= -->

        <div class="data-section">

            <div class="data-number">01 / 04</div>

            <h2>🍔 WHAT DO MU STUDENTS SPEND ON?</h2>

            <p class="data-intro">
                Food absolutely dominates the spending categories
                selected by our sample.
            </p>


            <div class="data-big-number">
                16 / 17
            </div>

            <p class="data-highlight">
                students selected <strong>food / eating out</strong>.
            </p>


            <div class="data-bars">

                <div class="bar-row">
                    <span>🍔 Food</span>

                    <div class="bar">
                        <div class="fill" style="width:94%;"></div>
                    </div>

                    <strong>16</strong>
                </div>


                <div class="bar-row">
                    <span>🎬 Entertainment</span>

                    <div class="bar">
                        <div class="fill" style="width:35%;"></div>
                    </div>

                    <strong>6</strong>
                </div>


                <div class="bar-row">
                    <span>🧴 Personal care</span>

                    <div class="bar">
                        <div class="fill" style="width:35%;"></div>
                    </div>

                    <strong>6</strong>
                </div>


                <div class="bar-row">
                    <span>🛍️ Shopping</span>

                    <div class="bar">
                        <div class="fill" style="width:29%;"></div>
                    </div>

                    <strong>5</strong>
                </div>


                <div class="bar-row">
                    <span>🚌 Transport</span>

                    <div class="bar">
                        <div class="fill" style="width:29%;"></div>
                    </div>

                    <strong>5</strong>
                </div>


                <div class="bar-row">
                    <span>📚 Academics</span>

                    <div class="bar">
                        <div class="fill" style="width:18%;"></div>
                    </div>

                    <strong>3</strong>
                </div>


                <div class="bar-row">
                    <span>✨ Other</span>

                    <div class="bar">
                        <div class="fill" style="width:6%;"></div>
                    </div>

                    <strong>1</strong>
                </div>

            </div>

        </div>


        <!-- ================= Q2 ================= -->

        <div class="data-section">

            <div class="data-number">02 / 04</div>

            <h2>📊 HOW MUCH GOES TOWARD THE MAIN EXPENSE?</h2>

            <p class="data-intro">
                The responses were spread across different percentages,
                with two groups tied for the highest count.
            </p>


            <div class="percentage-cards">

                <div class="percentage-card">
                    <strong>1 / 17</strong>
                    <span>Less than 20%</span>
                </div>


                <div class="percentage-card">
                    <strong>2 / 17</strong>
                    <span>20–40%</span>
                </div>


                <div class="percentage-card featured-card">
                    <strong>7 / 17</strong>
                    <span>40–60%</span>
                </div>


                <div class="percentage-card featured-card">
                    <strong>7 / 17</strong>
                    <span>More than 60%</span>
                </div>

            </div>


            <p class="data-note-small">

                <strong>14 of 17 respondents</strong> reported that
                their main expense accounted for at least 40%
                of their spending.

            </p>

        </div>


        <!-- ================= Q3 ================= -->

        <div class="data-section">

            <div class="data-number">03 / 04</div>

            <h2>🛒 HOW OFTEN DO STUDENTS IMPULSE BUY?</h2>

            <p class="data-intro">
                “Rarely” was the most common individual response.
            </p>


            <div class="impulse-display">

                <div class="impulse-main">

                    <strong>35.3%</strong>

                    <span>Rarely</span>

                    <small>MOST COMMON RESPONSE</small>

                </div>


                <div class="impulse-small">

                    <div>
                        <strong>11.8%</strong>
                        <span>Never</span>
                    </div>

                    <div>
                        <strong>29.4%</strong>
                        <span>Sometimes</span>
                    </div>

                    <div>
                        <strong>11.8%</strong>
                        <span>Often</span>
                    </div>

                    <div>
                        <strong>11.8%</strong>
                        <span>Very often</span>
                    </div>

                </div>

            </div>

        </div>


        <!-- ================= Q4 ================= -->

        <div class="data-section">

            <div class="data-number">04 / 04</div>

            <h2>₹ WHAT WOULD THEY DO WITH ₹1,000?</h2>

            <p class="data-intro">
                And here we get a tie.
            </p>


            <div class="thousand-result">

                <div class="thousand-option">

                    <div class="money-icon">🍔</div>

                    <strong>35.3%</strong>

                    <span>
                        would choose<br>
                        <b>food / eating out</b>
                    </span>

                </div>


                <div class="tie">VS</div>


                <div class="thousand-option">

                    <div class="money-icon">🏦</div>

                    <strong>35.3%</strong>

                    <span>
                        would<br>
                        <b>save it</b>
                    </span>

                </div>

            </div>


            <p class="data-note-small">

                Shopping: 11.8% &nbsp;•&nbsp;
                Entertainment: 11.8% &nbsp;•&nbsp;
                Other: 5.9%

            </p>

        </div>


        <!-- ================= END ================= -->

        <div class="data-final">

            <div class="data-number">
                END OF DATA
            </div>


            <h2>
                THERE'S NO SINGLE<br>
                "AVERAGE" STUDENT.
            </h2>


            <p>
                Our 17 respondents showed some clear patterns —
                especially when it came to food — but their spending
                habits weren't identical.
            </p>


            <p>
                Your quiz result simply compares your answers
                with the most common responses in this sample.
            </p>


            <strong>
                17 students. 4 survey questions.
                And now you're part of the dataset. 👀
            </strong>

        </div>

    `;

}
