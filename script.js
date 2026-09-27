/* =========================================================
   QUIZ DATA
========================================================= */

const quizQuestions = [

  /* =======================================================
     SURVEY QUESTION 1
     Used for MU MATCH
  ======================================================= */

  {
    type: "survey",
    question: "What do you spend most of your money on?",
    answers: [
      {
        text: "Food",
        value: "food"
      },
      {
        text: "Entertainment",
        value: "entertainment"
      },
      {
        text: "Personal care",
        value: "personal-care"
      },
      {
        text: "Shopping",
        value: "shopping"
      },
      {
        text: "Transport",
        value: "transport"
      }
    ]
  },


  /* =======================================================
     ARCHETYPE QUESTION 1
  ======================================================= */

  {
    type: "archetype",
    question: "You see something you really want, but you weren't planning to buy it. What do you do?",
    answers: [
      {
        text: "Buy it.",
        scores: {
          spender: 2,
          impulse: 2
        }
      },
      {
        text: "Add it to my cart and think about it.",
        scores: {
          impulse: 1
        }
      },
      {
        text: "Wait and decide later.",
        scores: {
          budgeter: 2
        }
      },
      {
        text: "Check my balance first.",
        scores: {
          saver: 2,
          budgeter: 1
        }
      },
      {
        text: "Forget about it.",
        scores: {
          saver: 1
        }
      }
    ]
  },


  /* =======================================================
     SURVEY QUESTION 2
     Used for MU MATCH
  ======================================================= */

  {
    type: "survey",
    question: "Approximately what percentage of your spending goes toward your main expense?",
    answers: [
      {
        text: "Less than 20%",
        value: "less20"
      },
      {
        text: "20–40%",
        value: "20to40"
      },
      {
        text: "40–60%",
        value: "40to60"
      },
      {
        text: "More than 60%",
        value: "more60"
      }
    ]
  },


  /* =======================================================
     ARCHETYPE QUESTION 2
  ======================================================= */

  {
    type: "archetype",
    question: "When you get your monthly or weekly money, what do you usually do?",
    answers: [
      {
        text: "Spend it pretty quickly.",
        scores: {
          spender: 2,
          impulse: 1
        }
      },
      {
        text: "Have a rough idea of what I'll spend it on.",
        scores: {
          budgeter: 2
        }
      },
      {
        text: "Set some of it aside.",
        scores: {
          saver: 2
        }
      },
      {
        text: "Track basically everything I spend.",
        scores: {
          budgeter: 3
        }
      },
      {
        text: "Somehow, the money just disappears.",
        scores: {
          mystery: 3
        }
      }
    ]
  },


  /* =======================================================
     SURVEY QUESTION 3
     Used for MU MATCH
  ======================================================= */

  {
    type: "survey",
    question: "How often do you make impulse purchases?",
    answers: [
      {
        text: "Never",
        value: "never"
      },
      {
        text: "Rarely",
        value: "rarely"
      },
      {
        text: "Sometimes",
        value: "sometimes"
      },
      {
        text: "Often",
        value: "often"
      },
      {
        text: "Very often",
        value: "veryoften"
      }
    ]
  },


  /* =======================================================
     ARCHETYPE QUESTION 3
  ======================================================= */

  {
    type: "archetype",
    question: "You and your friends are going out, but the plan is getting expensive. You...",
    answers: [
      {
        text: "Still go. It's worth it.",
        scores: {
          social: 3,
          spender: 1
        }
      },
      {
        text: "Suggest doing something cheaper.",
        scores: {
          budgeter: 2
        }
      },
      {
        text: "Go, but try not to spend much.",
        scores: {
          saver: 2
        }
      },
      {
        text: "Drop out of the plan.",
        scores: {
          saver: 2
        }
      },
      {
        text: "Convince everyone to do something else.",
        scores: {
          budgeter: 1,
          social: 1
        }
      }
    ]
  },


  /* =======================================================
     SURVEY QUESTION 4
     Used for MU MATCH
  ======================================================= */

  {
    type: "survey",
    question: "If you suddenly received ₹1,000, what would you most likely spend it on?",
    answers: [
      {
        text: "Food / eating out",
        value: "food"
      },
      {
        text: "Save it",
        value: "save"
      },
      {
        text: "Shopping",
        value: "shopping"
      },
      {
        text: "Entertainment",
        value: "entertainment"
      },
      {
        text: "Something else",
        value: "other"
      }
    ]
  },


  /* =======================================================
     ARCHETYPE QUESTION 4
  ======================================================= */

  {
    type: "archetype",
    question: "Which sentence sounds most like you?",
    answers: [
      {
        text: "Money is meant to be spent.",
        scores: {
          spender: 3
        }
      },
      {
        text: "I deserve a little treat.",
        scores: {
          impulse: 3
        }
      },
      {
        text: "I'll save what's left.",
        scores: {
          saver: 3
        }
      },
      {
        text: "I should probably stop spending.",
        scores: {
          impulse: 1,
          spender: 1
        }
      },
      {
        text: "I have no idea where my money went.",
        scores: {
          mystery: 3
        }
      }
    ]
  }

];


/* =========================================================
   CURRENT STATE
========================================================= */

let currentQuestion = 0;

let userAnswers = [];

let archetypeScores = {
  saver: 0,
  impulse: 0,
  budgeter: 0,
  social: 0,
  spender: 0,
  mystery: 0
};


/* =========================================================
   ARCTYPE RESULT INFORMATION
========================================================= */

const archetypes = {

  saver: {
    title: "THE SAVER",

    quote: "“I’m saving all my love for you.”",

    source: "— Whitney Houston"
  },

  budgeter: {
    title: "THE BUDGETER",

    quote: "“I got bills, I gotta pay.”",

    source: "— LunchMoney Lewis"
  },

  social: {
    title: "THE SOCIAL SPENDER",

    quote: "“I wanna dance with somebody.”",

    source: "— Whitney Houston"
  },

  mystery: {
    title: "THE MONEY MYSTERY",

    quote: "“Where Is My Mind?”",

    source: "— Pixies"
  },

  impulse: {
    title: "THE IMPULSE SPENDER",

    quote: "“Oops!... I did it again.”",

    source: "— Britney Spears"
  },

  spender: {
    title: "THE SPENDER",

    quote: "“Money, money, money, must be funny, in a rich man's world.”",

    source: "— ABBA"
  }

};


/* =========================================================
   SCREEN SWITCHING
========================================================= */

function showScreen(screenId) {

  const screens = document.querySelectorAll(".screen");

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenId);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}


/* =========================================================
   START QUIZ
========================================================= */

function startQuiz() {

  currentQuestion = 0;

  userAnswers = [];

  archetypeScores = {
    saver: 0,
    impulse: 0,
    budgeter: 0,
    social: 0,
    spender: 0,
    mystery: 0
  };

  showScreen("quiz");

  showQuestion();
}


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion() {

  const question = quizQuestions[currentQuestion];

  const questionText =
    document.getElementById("question-text");

  const answerOptions =
    document.getElementById("answer-options");


  /* Question */

  questionText.textContent = question.question;


  /* Clear previous answers */

  answerOptions.innerHTML = "";


  /* Create answer buttons */

  question.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "answer-option";

    button.textContent = answer.text;

    button.type = "button";

    button.addEventListener("click", function () {
      selectAnswer(index);
    });

    answerOptions.appendChild(button);

  });

}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(answerIndex) {

  const question = quizQuestions[currentQuestion];

  const selectedAnswer =
    question.answers[answerIndex];


  /* Save answer */

  userAnswers[currentQuestion] = {
    question: question,
    answer: selectedAnswer
  };


  /* If archetype question, add scores */

  if (
    question.type === "archetype" &&
    selectedAnswer.scores
  ) {

    Object.keys(selectedAnswer.scores).forEach(type => {

      archetypeScores[type] +=
        selectedAnswer.scores[type];

    });

  }


  /* Move forward */

  currentQuestion++;


  /* Finished? */

  if (currentQuestion >= quizQuestions.length) {

    finishQuiz();

  } else {

    showQuestion();

  }

}


/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

  const archetype = calculateArchetype();

  const match = calculateMatch();

  showResult(archetype, match);

  showScreen("results");

}


/* =========================================================
   CALCULATE ARCHETYPE
========================================================= */

function calculateArchetype() {

  let highestScore = -1;

  let winner = "mystery";


  Object.keys(archetypeScores).forEach(type => {

    if (archetypeScores[type] > highestScore) {

      highestScore = archetypeScores[type];

      winner = type;

    }

  });


  /*
    In the unlikely event of a tie, use this
    order so the result is deterministic.
  */

  return winner;

}


/* =========================================================
   CALCULATE MU MATCH
========================================================= */

function calculateMatch() {

  let matches = 0;


  /*
    SURVEY QUESTION 1
    Majority = Food
  */

  const q1 = userAnswers[0];

  if (
    q1 &&
    q1.answer &&
    q1.answer.value === "food"
  ) {

    matches++;

  }


  /*
    SURVEY QUESTION 2
    Majority is tied:
    40–60% = 7
    More than 60% = 7
  */

  const q2 = userAnswers[2];

  if (
    q2 &&
    q2.answer &&
    (
      q2.answer.value === "40to60" ||
      q2.answer.value === "more60"
    )
  ) {

    matches++;

  }


  /*
    SURVEY QUESTION 3
    Majority = Rarely
  */

  const q3 = userAnswers[4];

  if (
    q3 &&
    q3.answer &&
    q3.answer.value === "rarely"
  ) {

    matches++;

  }


  /*
    SURVEY QUESTION 4
    Majority is tied:
    Food = 35.3%
    Save = 35.3%
  */

  const q4 = userAnswers[6];

  if (
    q4 &&
    q4.answer &&
    (
      q4.answer.value === "food" ||
      q4.answer.value === "save"
    )
  ) {

    matches++;

  }


  return {
    matches: matches,
    percentage: (matches / 4) * 100
  };

}


/* =========================================================
   SHOW RESULT
========================================================= */

function showResult(archetype, match) {

  const result = archetypes[archetype];


  /* Spending type */

  document.getElementById(
    "result-archetype"
  ).textContent = result.title;


  /* Quote */

  document.getElementById(
    "result-quote"
  ).textContent = result.quote;


  /* Artist */

  document.getElementById(
    "result-source"
  ).textContent = result.source;


  /* Match percentage */

  document.getElementById(
    "match-percentage"
  ).textContent = `${match.percentage}%`;


  /* Match description */

  document.getElementById(
    "match-description"
  ).textContent =
    `${match.matches} out of 4 survey questions matched the most common response.`;


  /* Comparison table */

  createComparisonTable();

}


/* =========================================================
   GET USER ANSWER
========================================================= */

function getUserAnswer(questionIndex) {

  const answer = userAnswers[questionIndex];

  if (!answer || !answer.answer) {
    return "—";
  }

  return answer.answer.text;

}


/* =========================================================
   COMPARISON TABLE
========================================================= */

function createComparisonTable() {

  const container =
    document.getElementById(
      "comparison-table-container"
    );


  container.innerHTML = "";


  const table =
    document.createElement("table");


  table.className =
    "comparison-table";


  /* =======================================================
     TABLE HEADER
  ======================================================= */

  const thead =
    document.createElement("thead");

  const headerRow =
    document.createElement("tr");


  const headers = [
    "SURVEY QUESTION",
    "YOUR ANSWER",
    "MOST COMMON RESPONSE",
    "MATCH"
  ];


  headers.forEach(header => {

    const th =
      document.createElement("th");

    th.textContent = header;

    headerRow.appendChild(th);

  });


  thead.appendChild(headerRow);

  table.appendChild(thead);


  /* =======================================================
     TABLE BODY
  ======================================================= */

  const tbody =
    document.createElement("tbody");


  /* -------------------------------------------------------
     Q1
  ------------------------------------------------------- */

  addComparisonRow(
    tbody,

    "What do you spend most of your money on?",

    getUserAnswer(0),

    "Food / eating out — 16 / 17",

    userAnswers[0] &&
    userAnswers[0].answer.value === "food"
  );


  /* -------------------------------------------------------
     Q2
  ------------------------------------------------------- */

  const q2Match =
    userAnswers[2] &&
    (
      userAnswers[2].answer.value === "40to60" ||
      userAnswers[2].answer.value === "more60"
    );


  addComparisonRow(
    tbody,

    "What percentage goes toward your main expense?",

    getUserAnswer(2),

    "40–60% OR more than 60% — 7 / 17 each",

    q2Match
  );


  /* -------------------------------------------------------
     Q3
  ------------------------------------------------------- */

  addComparisonRow(
    tbody,

    "How often do you make impulse purchases?",

    getUserAnswer(4),

    "Rarely — 35.3%",

    userAnswers[4] &&
    userAnswers[4].answer.value === "rarely"
  );


  /* -------------------------------------------------------
     Q4
  ------------------------------------------------------- */

  const q4Match =
    userAnswers[6] &&
    (
      userAnswers[6].answer.value === "food" ||
      userAnswers[6].answer.value === "save"
    );


  addComparisonRow(
    tbody,

    "What would you do with an unexpected ₹1,000?",

    getUserAnswer(6),

    "Food / eating out OR save it — 35.3% each",

    q4Match
  );


  table.appendChild(tbody);

  container.appendChild(table);

}


/* =========================================================
   ADD COMPARISON ROW
========================================================= */

function addComparisonRow(
  tbody,
  question,
  userAnswer,
  commonResponse,
  isMatch
) {

  const row =
    document.createElement("tr");


  /* Question */

  const questionCell =
    document.createElement("td");

  questionCell.textContent =
    question;


  /* User answer */

  const userCell =
    document.createElement("td");

  userCell.textContent =
    userAnswer;


  /* Common response */

  const commonCell =
    document.createElement("td");

  commonCell.textContent =
    commonResponse;


  /* Match */

  const matchCell =
    document.createElement("td");

  matchCell.className =
    "match-cell";

  matchCell.textContent =
    isMatch ? "✓" : "—";


  row.appendChild(questionCell);

  row.appendChild(userCell);

  row.appendChild(commonCell);

  row.appendChild(matchCell);


  tbody.appendChild(row);

}


/* =========================================================
   SHOW DATA PAGE
========================================================= */

function showData() {

  showScreen("data");

}


/* =========================================================
   OPTIONAL: ALLOW ENTER / SPACE TO SELECT
========================================================= */

document.addEventListener("keydown", function(event) {

  if (
    event.key !== "Enter" &&
    event.key !== " "
  ) {
    return;
  }


  const quizScreen =
    document.getElementById("quiz");


  if (
    !quizScreen.classList.contains("active")
  ) {
    return;
  }


  const buttons =
    document.querySelectorAll(
      ".answer-option"
    );


  if (
    buttons.length === 0
  ) {
    return;
  }


  /*
    If focus is already on an answer button,
    let normal browser behaviour happen.
  */

  if (
    document.activeElement &&
    document.activeElement.classList.contains(
      "answer-option"
    )
  ) {
    return;
  }

});


/* =========================================================
   INITIAL STATE
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

  /*
    Make absolutely sure only the intro
    is visible when the website loads.
  */

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });


  const intro =
    document.getElementById("intro");


  if (intro) {
    intro.classList.add("active");
  }

});
