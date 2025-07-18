var addBtn = document.querySelector('.add-btn');
var taskList = document.querySelector('.task-list');
var input = document.querySelector('.input-field');
var tasks = [];
var editingIndex;
var handleDelete = function (index) {
    tasks.splice(index, 1);
    renderTasks();
};
var renderTasks = function () {
    taskList.innerHTML = '';
    tasks.forEach(function (data, index) {
        var card = document.createElement('div');
        card.className = 'card';
        if (index == editingIndex) {
            card.innerHTML = "\n            <input type=\"text\" placeholder=".concat(data, " class='input-field newValue'>\n            <div class=\"btns\">\n                <i class=\"fa-solid fa-floppy-disk save\" style=\"color:rgb(61, 249, 61)\"></i>\n            </div>\n        ");
            var saveEdit = card.querySelector('.save');
            var inputField_1 = card.querySelector('.newValue');
            saveEdit.addEventListener('click', function () {
                if (inputField_1.value.trim()) {
                    tasks[index] = inputField_1.value;
                    editingIndex = null;
                    renderTasks();
                }
            });
        }
        else {
            card.innerHTML = "\n            <h3>".concat(data, "</h3>\n            <div class=\"btns\">\n                <i class=\"fa-solid fa-pen-to-square edit\" style=\"color:rgb(61, 249, 61)\"></i>\n                <i class=\"fa-solid fa-trash delete\" style=\"color:rgb(243, 78, 78)\"></i>\n            </div>\n        ");
            var deleteBtn = card.querySelector('.delete');
            var editBtn = card.querySelector('.edit');
            deleteBtn.addEventListener('click', function () {
                handleDelete(index);
            });
            editBtn.addEventListener('click', function () {
                editingIndex = index;
                renderTasks();
            });
        }
        taskList.appendChild(card);
    });
};
addBtn.addEventListener('click', function () {
    var taskText = input.value.trim();
    if (taskText) {
        tasks.push(taskText);
        renderTasks();
        input.value = '';
    }
});
