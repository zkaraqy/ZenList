const kontainer = document.getElementById("container");

const submitBttn = document.querySelector(".addList button");
const toDoList = document.querySelector(".ToDo-List");
const deleteBttn = document.querySelector(".delete");

let counter = 1;

submitBttn.addEventListener("click", function () {
  const newToDo = document.createElement("div");

  const title = document.getElementById("titleNewList");
  const desc = document.getElementById("descNewList");
  const date = document.getElementById("dateNewList");
  const time = document.getElementById("timeNewList");

  const content = `
  <p>${counter}.</p>
  <div class="column">
    <h2>
      ${title.value}
    </h2>
    <p>
      ${desc.value}
    </p>
    <p>
      <b>Date: </b>${new Date(date.value).toDateString()}
    </p>
    <p>
    <b>Time: </b>${time.value}
    </p>
  </div>
  <p>
    ${new Date(date.value).toDateString()}
  </p>
  <p>
    ${time.value}
  </p>
  <div class="action">
    <div class="delete" alt="delete" title="delete"></div>
  </div>`;

  newToDo.innerHTML = content;

  newToDo.setAttribute("class", `list ${counter}`);

  toDoList.appendChild(newToDo);
  counter++;
});

kontainer.addEventListener("click", function (el) {
  if (el.target.className === "delete") {
    document
      .querySelector(".ToDo-List")
      .removeChild(el.target.parentElement.parentElement);
  }
});