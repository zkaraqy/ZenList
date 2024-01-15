const kontainer = document.getElementById("container");

const submitBttn = document.querySelector(".addList button");
const toDoList = document.querySelector(".ToDo-List");
const deleteBttn = document.querySelector(".delete");

let counter = 1;

submitBttn.addEventListener("click", function () {
  const newToDo = document.createElement("div");

  const title = document.getElementById("titleNewList");
  const desc = document.getElementById("descNewList");
  const dateAndTime = document.getElementById("dateTimeNewList");

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
      <b>
        ${new Date(dateAndTime.value).toUTCString()}
      </b>
    </p>
  </div>
  <p>
    <b>
      ${new Date(dateAndTime.value).toUTCString()}
    </b>
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
