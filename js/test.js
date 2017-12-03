const QUESTION_NUM = 20;

const init = () => {
  if (localStorage.getItem("questions") == undefined) {
    location.href = "index.html";
  }
  const questions = JSON.parse(localStorage.getItem("questions"));

  if (localStorage.getItem("progress") == undefined || localStorage.getItem("progress") == null || localStorage.getItem("progress") >= QUESTION_NUM || localStorage.getItem("progress") < 0) {
    localStorage.setItem("progress", 0);
    localStorage.setItem("correctNum", 0);
    localStorage.setItem("finishPreTest", false);
  }

  const progress = parseInt(localStorage.getItem("progress"));
  console.log(progress);
  localStorage.setItem("correct", false);

  document.getElementById("num").textContent = "第" + (progress + 1) + "問";
  document.getElementById("image").src = questions[progress].img;
  document.getElementById("statement").textContent = questions[progress].statement;
  document.getElementById("choice0").textContent = questions[progress].choices[0];
  document.getElementById("choice1").textContent = questions[progress].choices[1];
  document.getElementById("choice2").textContent = questions[progress].choices[2];
  document.getElementById("choice3").textContent = questions[progress].choices[3];
};

const choice = (choiced) => {
  const progress = parseInt(localStorage.getItem("progress"));
  const questions = JSON.parse(localStorage.getItem("questions"));

  if (questions[progress].answer === choiced) {
    const correctNum = parseInt(localStorage.getItem("correctNum"));
    localStorage.setItem("correctNum", correctNum + 1);
    localStorage.setItem("correct", true);
  } else {
    localStorage.setItem("correct", false);
  }
  localStorage.setItem("progress", progress + 1);
  location.href = "answer.html";
};
