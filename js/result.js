const init = () => {
  const questions = JSON.parse(localStorage.getItem("questions"));
  const correctNum = parseInt(localStorage.getItem("correctNum"));
  const questionNum = parseInt(localStorage.getItem("questionNum"));

  document.getElementById("numer").textContent = correctNum;
  document.getElementById("denom").textContent = questionNum;
};

const pushReturnButton = () => {
  location.href = 'index.html';
  return false;
};
