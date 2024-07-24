const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "wow, added by js";

container.appendChild(content);


const redPara = document.createElement("p");
redPara.style = "color: red;";
redPara.textContent = "hey im red!";

container.appendChild(redPara);


const blueh = document.createElement("h3");
blueh.style.color = "blue";
blueh.textContent = "Im a blue h3";

container.appendChild(blueh);


const newDiv = document.createElement("div");
newDiv.style.cssText = "border: 2px solid black; background-color: pink;"

const newh = document.createElement("h1");
newh.textContent = "im in a div";

const newp = document.createElement("p");
newp.textContent = "ME TOO!";

newDiv.appendChild(newh);
newDiv.appendChild(newp);
container.appendChild(newDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("hello?");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "blue";
})