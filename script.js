// ---------- QUIZ DATA ----------

const questions = [

    // 1
    {
        question: "You see something you really want, but you weren't planning to buy it. What do you do?",
        options: [
            "Buy it. YOLO.",
            "Add it to my cart and think about it later.",
            "Wait a few days and decide.",
            "Check my balance first.",
            "Forget about it."
        ],
        type: "archetype",
        tags: [
            ["spender", 2],
            ["impulse", 2],
            ["budgeter", 1],
            ["saver", 1]
        ]
    },

    // 2 — SURVEY
    {
        question: "What do you spend most of your money on?",
        options: [
            "Food / eating out",
            "Shopping",
            "Entertainment",
            "Transport",
            "Personal care",
            "Academics"
        ],
        type: "data"
    },

    // 3
    {
        question: "When you get your monthly or weekly money, you usually...",
        options: [
            "Spend freely and figure it out later.",
            "Have a rough idea of where it'll go.",
            "Immediately set some aside.",
            "Track almost everything I spend.",
            "It disappears and I don't know how."
        ],
        type: "archetype",
        tags: [
            ["spender", 2],
            ["budgeter", 2],
            ["saver", 2],
            ["mystery", 2]
        ]
    },

    // 4 — SURVEY
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

    // 5
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
        tags: [
            ["social", 2],
            ["budgeter", 2],
            ["saver", 2]
        ]
    },

    // 6 — SURVEY
    {
        question: "If you suddenly received ₹1,000, what would you most likely do with it?",
        options: [
            "Spend it on food",
            "Save it",
            "Go shopping",
            "Spend it on entertainment",
            "Something else"
        ],
        type: "data"
    },

    // 7
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
        tags: [
            ["spender", 2],
            ["impulse", 2],
            ["saver", 2],
            ["mystery", 2]
        ]
    },

    // 8 — SURVEY
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

    // 9
    {
        question: "At the end of the month, your financial situation is usually...",
        options: [
            "I'm thriving. I still have money.",
            "I'm fine. I have enough.",
            "I'm surviving. 😭",
            "I'm borrowing from future me.",
            "What money?"
        ],
        type: "archetype",
        tags: [
            ["saver", 2],
            ["budgeter", 1],
            ["spender", 1],
            ["mystery", 2]
        ]
    }

];


// ---------- QUIZ VARIABLES ----------

let currentQuestion = 0;

let answers = [];

let archetypeScores = {
    foodie: 0,
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
        foodie: 0,
        saver: 0,
        impulse: 0,
        budgeter: 0,
        social: 0,
        spender: 0,
        mystery: 0
    };

    console.log("Quiz started!");

}
