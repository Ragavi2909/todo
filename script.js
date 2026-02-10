function addTask(){
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    let li = document.createElement("li");
    li.innerText = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function(){
        li.remove();
    }
    li.appendChild(deleteBtn);

    let list = document.getElementById("taskList");
    list.appendChild(li);

    input.value="";
}