import escapeForHTML from '../utils/escape-html';

const todoDetails = (todos = []) => {
  if (todos && !todos.length) {
    return `<p class="todo-details">You currently do not have any task listed</p>`;
  }

  const inCompleteTodos = todos.filter(todo => todo.completed !== true).length;

  if (inCompleteTodos === 0) {
    return `<p class="todo-details">You do not have any task left to do.</p>`;
  }

  if (inCompleteTodos === 1) {
    return `<p class="todo-details">You have a single task left to do.</p>`;
  }

  return `<p class="todo-details">You have ${inCompleteTodos} tasks left to do.</p>`;
};

const todoList = (todos = []) => {
  if (!todos.length) {
    return '';
  }

  return todos.reduce(
    (acc, todo) =>
      `${acc}${` <li class="todo-item" data-id=${todo.id} >
          <label class="js-toggle-todo">
            <input class="todo-toggle visually-hidden" type="checkbox" ${
              todo.completed ? 'checked' : ''
            } />
            <span class="todo-toggle-indicator js-toggle-todo"></span>
            <span class="todo-name js-toggle-todo">${escapeForHTML(todo.name)}</span>
          </label>
          <button class="js-delete-todo todo-delete">
            delete
          </button>
        </li>`}`,
    ''
  );
};

export { todoDetails, todoList };
