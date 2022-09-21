const input = document.getElementById('input-todo');
const btn = document.getElementById('add-todo-btn');
const list = document.getElementById('todos-list');

btn.addEventListener('click', () => {
    const task = input.value;
    input.value = '';

    const li = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');

    li.appendChild(span);
    span.textContent = task;
    li.appendChild(btn);
    btn.textContent = 'delete';

    list.appendChild(li);
    btn.addEventListener('click', () => {
        list.removeChild(li);
    });
});