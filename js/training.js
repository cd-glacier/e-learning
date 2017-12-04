const init = () => {
  const training = JSON.parse(localStorage.getItem("training"));

  training.forEach((e) => {
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute("class", "img-div");

    const img = document.createElement("img");
    img.setAttribute("src", e.img);
    imgDiv.appendChild(img);

    const imgStatement = document.createElement("p");
    imgStatement.setAttribute("class", "statement");
    imgStatement.textContent = e.explain;
    imgDiv.appendChild(imgStatement);

    document.getElementById("content").appendChild(imgDiv);
  });
}
