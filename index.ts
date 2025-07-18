const addBtn = document.querySelector('.add-btn') as HTMLButtonElement;
const taskList = document.querySelector('.task-list') as HTMLDivElement;
const input = document.querySelector('.input-field') as HTMLInputElement;
let tasks: string[] = [];
let editingIndex: any;

const handleDelete = (index: number): void => {
    tasks.splice(index, 1);
    renderTasks();
};
const renderTasks = (): void => {
    taskList.innerHTML = '';
    tasks.forEach((data, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        if(index == editingIndex){
            card.innerHTML = `
            <input type="text" placeholder=${data} class='input-field newValue'>
            <div class="btns">
                <i class="fa-solid fa-floppy-disk save" style="color:rgb(61, 249, 61)"></i>
            </div>
        `
        const saveEdit = card.querySelector('.save') as HTMLElement
        const inputField = card.querySelector('.newValue') as HTMLInputElement
        saveEdit.addEventListener('click', () => {
            if(inputField.value.trim()){
                tasks[index] = inputField.value
                editingIndex = null
                renderTasks()
            }
        })
        }
        else{
            card.innerHTML = `
            <h3>${data}</h3>
            <div class="btns">
                <i class="fa-solid fa-pen-to-square edit" style="color:rgb(61, 249, 61)"></i>
                <i class="fa-solid fa-trash delete" style="color:rgb(243, 78, 78)"></i>
            </div>
        `
        const deleteBtn = card.querySelector('.delete') as HTMLElement;
        const editBtn = card.querySelector('.edit') as HTMLElement;
        deleteBtn.addEventListener('click', () => {
            handleDelete(index);
        });
        editBtn.addEventListener('click', () => {
            editingIndex = index
            renderTasks()
        })
        }

        taskList.appendChild(card);
    });
};


addBtn.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText) {
        tasks.push(taskText);
        renderTasks();
        input.value = '';
    }
});

