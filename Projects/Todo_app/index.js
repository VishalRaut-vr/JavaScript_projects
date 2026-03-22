let toDoList = JSON.parse(localStorage.getItem("todos")) || [];

displayItems();

function saveData(){
    localStorage.setItem("todos", JSON.stringify(toDoList));
}

function addTodo(){
    let input = document.querySelector('#todo_input');
    let date = document.querySelector('#date_input');

    let item = input.value.trim();
    let dueDate = date.value;

    if(item === ''){
        alert("Please enter a task");
        return;
    }

    toDoList.push({
        item: item,
        dueDate: dueDate,
        completed: false
    });

    input.value = '';
    date.value = '';

    saveData();
    displayItems();
}

function displayItems(){
    let container = document.querySelector('#todo_container');
    let html = '';

    for(let i = 0; i < toDoList.length; i++){
        let {item, dueDate, completed} = toDoList[i];

        html += `
        <div class="todo_item ${completed ? 'completed' : ''}">
            <span>${item} (${dueDate})</span>
            <div>
                <button class="btn_done" onclick="toggleDone(${i})">✔</button>
                <button class="btn_delete" onclick="deleteItem(${i})">✖</button>
            </div>
        </div>
        `;
    }

    container.innerHTML = html;
}

function deleteItem(index){
    toDoList.splice(index,1);
    saveData();
    displayItems();
}

function toggleDone(index){
    toDoList[index].completed = !toDoList[index].completed;
    saveData();
    displayItems();
}
