const input = document.querySelector("#capfav");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;
deleteButton.textContent = "❌";
deleteButton.setAttribute("aria-label", `Remover ${input.value}`);

li.append(deleteButton);
list.append(li);
