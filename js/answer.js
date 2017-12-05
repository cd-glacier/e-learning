const init = () => {
  const correct = JSON.parse(localStorage.getItem("correct"));
  const progress = parseInt(localStorage.getItem("progress"));
  const questions = JSON.parse(localStorage.getItem("questions"));
  const training = JSON.parse(localStorage.getItem("training"));

  console.log(correct);
  var ok = document.getElementById("ok");
  if (correct) {
    ok.textContent = "正解";
  } else {
    ok.textContent = "不正解";
  }


  /*
  if (questions[progress].commentary != undefined && questions[progress.commentary != null]) {
    document.getElementById("commentary-content").textContent = questions[progress].commentary;
  }
  */

  if (training != undefined && training != null) {
    const commentary = training.filter((e) => {
      if (e.img === questions[progress - 1].img) {
        return true;
      }
    });
    document.getElementById("commentary-content").textContent = commentary[0].explain;
    document.getElementById("commentary-image").src = commentary[0].img;
  }

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
