const myinput = document.getElementById("textinput");
const todo = document.getElementById("myUL");

// Function to add a task
function addTask() {
    if (myinput.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = myinput.value;
        todo.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    myinput.value = '';
    saveData();
}

// Function to handle task clicks
todo.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// Function to handle double-click and rename
todo.addEventListener("dblclick", function (e) {
  if (e.target.tagName === "LI") {
      const listItem = e.target;
      const oldText = listItem.textContent;
      
      const newText = prompt("Enter a new name:", oldText);
      
      if (newText !== null && newText.trim() !== "") {
          listItem.textContent = newText;
          saveData();
      }
  }
});


// Function to save data to local storage
function saveData() {
    localStorage.setItem("data", todo.innerHTML);
}

// Function to show tasks
function showTask() {
    todo.innerHTML = localStorage.getItem("data");
}
showTask();
