function addTask(){
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    let li = document.createElement("li");
    li.innerText = taskText;

    let list = document.getElementById("taskList");
    list.appendChild(li);
    
    input.value="";
}