toDoList = [
    {
        item:'Buy Milk',
        dueDate: '29/12/2025',
    },
    {
        item: 'Go out',
        dueDate: '30/12/2025',
    }
];
displayItems();

function addToDo(){
    let inputElement = document.querySelector('#Todo_input')
    let todoItem = inputElement.value;

    let dateElement = document.querySelector('#date_input')
    let tododate = dateElement.value;

    toDoList.push({item: todoItem , dueDate: tododate})

    inputElement.value = '';
    dateElement.value = '';

    if (toDoList) {
        displayItems();
    }
}

function displayItems(){
    let containerElements = document.querySelector('.todo_conatainer');
    let newHtml = '';
    for(let i = 0; i < toDoList.length; i++){
        //let item = toDoList[i].item;
        //let duedate = toDoList[i].dueDate;
        let {item,dueDate} = toDoList[i];
        newHtml = newHtml + `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button  class="btn_delete" onclick="toDoList.splice(${i},1);
         displayItems();">Delete</button>

        `;

    }
    containerElements.innerHTML = newHtml;
}
let todoStr = JSON.stringify(toDoList)
console.log(typeof todoStr)
console.log(todoStr)
console.log(typeof toDoList)
console.log(toDoList)
