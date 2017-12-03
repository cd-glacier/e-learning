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
  location.href = "test.html";
}
