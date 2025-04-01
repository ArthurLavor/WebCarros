// Selecionando os elementos do DOM
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

// Função para salvar tarefas no localStorage
function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para carregar tarefas do localStorage
function loadTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

// Função para renderizar a lista de tarefas
function renderTasks() {
  // Limpa a lista existente
  todoList.innerHTML = '';
  // Carrega tarefas salvas
  const tasks = loadTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('completed');

    // Cria um span para o texto da tarefa e torna clicável para marcar como concluída
    const span = document.createElement('span');
    span.textContent = task.text;
    span.style.cursor = 'pointer';
    span.addEventListener('click', () => toggleTask(index));

    // Botão para remover a tarefa
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(index));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Função para adicionar uma nova tarefa
function addTask() {
    const text = newTaskInput.value.trim();
    if(text !== '') {
        const tasks = loadTasks();
        tasks.push ({text: text, completed: false});
        saveTasks(tasks);
        newTaskInput.value = '';  //usado para limpar o imput
        renderTasks();
    }
}

function toggleTask(index) {
    const tasks = loadTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    renderTasks();
}

function deleteTask(index) {
    const tasks = loadTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
}

addTaskButton.addEventListener('click', addTask);
newTaskInput.addEventListener('keyup', (event) => {
    if(event.key === 'enter'){
        addTask();
    }
});

renderTasks();