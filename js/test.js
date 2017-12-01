const init = () => {

  if (localStorage.getItem("progress") == undefined || localStorage.getItem("progress") == null) {
    localStorage.setItem("progress", 0);
    localStorage.setItem("correct", 0);
  } else if (localStorage.getItem("progress") > 20 || localStorage.getItem("progress") < 0) {
    localStorage.setItem("progress", 0);
    localStorage.setItem("correct", 0);
  }
  const progress = parseInt(localStorage.getItem("progress"));

  document.getElementById("image").src = questions[progress].img;
  document.getElementById("statement").textContent = questions[progress].statement;
  document.getElementById("choice0").textContent = questions[progress].choices[0];
  document.getElementById("choice1").textContent = questions[progress].choices[1];
  document.getElementById("choice2").textContent = questions[progress].choices[2];
  document.getElementById("choice3").textContent = questions[progress].choices[3];
};

const choice = (choiced) => {
  const progress = parseInt(localStorage.getItem("progress"));

  if (questions[progress].answer === choiced) {
    alert("正解");
    const correct = parseInt(localStorage.getItem("correct"));
    localStorage.setItem("correct", correct + 1);
  } else {
    alert("不正解");
  }

  localStorage.setItem("progress", progress + 1);
};

const questions = [
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識はこの先踏切があることを表している。", "この標識はこの先線路があることを表している。", "この標識はこの先線路のため立ち入り禁止であることを表している。", "この標識はこの先、機関車が走っていることを表している。"],
    answer: 0,
    img: "img/gazou1.png",

  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は電車が見れる観光スポットであることを表している。", "この標識はこの先踏切があることを表している。", "この標識は電車優先道路であることを表している。", "この標識はこの先線路があることを表している。"],
    answer: 1,
    img: "img/gazou2.png",

  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は近くに学校、幼稚園があることを表している。", "この標識は子供が迷子になりやすいことを表している。", "この標識は子供に注意するように促している。", "この標識は子供がよく歩いていることを表している。"],
    answer: 0,
    img: "img/gazou3.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は車を停止するように促している。", "この標識はこの先一般道路であることを表している。", "この標識は信号機がないので注意するように促している。", "この標識はこの先信号機があることを表している。"],
    answer: 3,
    img: "img/gazou4.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識はこの先道がねじれていることを表している。", "この標識はこの先スピードがでやすいことを表している。", "この標識はこの先車がガタガタ揺れることを表している。", "この標識はこの先、すべりやすいことを表している。"],
    answer: 3,
    img: "img/gazou5.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識はこの先山から水が落ちてきていることを表している。", "この標識はこの先山道であることを表している。", "この標識はこの先落石に注意が必要であることを表している。", "この標識はこの先三角コーンがあることを表している。"],
    answer: 2,
    img: "img/gazou6.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識はこの先路面が凹凸であることを表している。", "この標識はこの先山道であることを表している。", "この標識は障害物に注意するように促している。", "この標識は陥没に注意するように促している。"],
    answer: 0,
    img: "img/gazou7.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識はこの先合流交通があることを表している。", "この標識はこの先道がわかれていることを表している。", "この標識は障害物があることを表している。", "この標識は優先道路であることを表している。"],
    answer: 0,
    img: "img/gazou8.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識はこの先一車線になることを表している。", "この標識はこの先合流交通があることを表している。", "この標識はこの先車線数が減少することを表している。", "この標識はこの先道幅が狭くなることを表している。"],
    answer: 2,
    img: "img/gazou9.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識はこの先一車線になることを表している。", "この標識はこの先幅員が減少することを表している。", "この標識はこの先車線数が減少することを表している。", "この標識はこの先道幅が狭くなることを表している。"],
    answer: 1,
    img: "img/gazou10.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は停車禁止であることを表している。", "この標識は駐停車禁止であることを表している。", "この標識は追い越し・追い抜き禁止であることを表している。", "この標識は駐車禁止であることを表している。"],
    answer: 1,
    img: "img/gazou11.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は停車禁止であることを表している。", "この標識は駐停車禁止であることを表している。", "この標識は追い越し・追い抜き禁止であることを表している。", "この標識は駐車禁止であることを表している。"],
    answer: 3,
    img: "img/gazou12.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は車を停車できることを表している。", "この標識は危険物積載車両は通行止めであることを表している。", "この標識は危険車両は通行禁止であることを表している。", "この標識は危険運転禁止あることを表している。"],
    answer: 1,
    img: "img/gazou13.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は自転車専用道路であることを表している。", "この標識は車を停車できることを表している。", "この標識は二輪車の通行が禁止であることを表している。", "この標識は歩行者の通行禁止であることを表している。"],
    answer: 0,
    img: "img/gazou14.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    answer: 2,
    img: "img/gazou15.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は近くに幼稚園があることを表している。", "この標識は子供から手をつないでおくことを表している。", "この標識は歩行者専用道路であることを表している。", "この標識は子供の飛び出し注意であることを表している。"],
    answer: 2,
    img: "img/gazou16.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は駐停車禁止であることを表している。", "この標識は高さ制限3.3mであることを表している。", "この標識は最高速度30m/h以内であることを表している。", "この標識は車幅3.3m以内であることを表している。"],
    answer: 1,
    img: "img/gazou17.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は最大幅2.2m以上でことを表している。", "この標識は最高速度20km/h以内であることを表している。", "この標識は高さ制限2.2m以内であることを表している。", "この標識は最大幅2.2m以内であることを表している。"],
    answer: 3,
    img: "img/gazou18.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は最高速度50km/h以内であることを表している。", "この標識は最高速度50km/h以上であることを表している。", "この標識は最低速度50km/h以上であることを表している。", "この標識は最低速度50km/h以内であることを表している。"],
    answer: 0,
    img: "img/gazou19.png",
  },
  {
    statement: "標識の意味をして正しいものは下のうちどれか。",
    choices: ["この標識は転回禁止であることを表している。", "この標識は直進のみ可能であることを表している。", "この標識は一方通行であることを表している。", "この標識はこの先危険物があることを表している。"],
    answer: 2,
    img: "img/gazou20.png",
  }
];
