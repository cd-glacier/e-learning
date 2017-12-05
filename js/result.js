const init = () => {
  const questions = JSON.parse(localStorage.getItem("questions"));
  const correctNum = parseInt(localStorage.getItem("correctNum"));

  document.getElementById("numer").textContent = correctNum;
  document.getElementById("denom").textContent = 20;
};

const pushReturnButton = () => {
  location.href = 'index.html';
  return false;
};
