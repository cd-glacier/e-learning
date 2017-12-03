const init = () => {
  const correct = JSON.parse(localStorage.getItem("correct"));

  console.log(correct);
  var ok = document.getElementById("ok");
  if (correct) {
    ok.textContent = "正解";
  } else {
    ok.textContent = "不正解";
  }

  document.getElementById("commentary-content").textContent = "かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜かいせつ〜";
}

const clickNextButton = () => {
  const progress = parseInt(localStorage.getItem("progress"));
  const questions = JSON.parse(localStorage.getItem("questions"));

  if (progress === 20) {
    localStorage.setItem("finishPreTest", true);
    location.href = "result.html";
    return false;
  }

  location.href = "test.html";
};

const done = () => {
};
