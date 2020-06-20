import { addTodo, deleteTodo, toggleTodo } from '../store/actions';
import { todoDetails, todoList } from './template';

const todoID = element => element.parentNode.dataset.id || element.parentNode.parentNode.dataset.id;

const Todo = store => {
  const $todoForm = document.querySelector('.js-todo-form');
  const $todoList = document.querySelector('.js-todo-list');
  const $todoDetails = document.querySelector('.js-todo-details');

  const laddTodo = () => {
    $todoForm.addEventListener('submit', $event => {
      $event.preventDefault();
      const todo = $event.target.querySelector('.js-todo-input').value.trim('');
      $event.target.reset();
      if (!todo) return;
      store.dispatch(addTodo(todo));
    });
  };

  const lremoveTodo = () => {
    $todoList.addEventListener('click', $event => {
      if (!$event.target.matches('.js-delete-todo')) return;
      const { id } = $event.target.parentNode.dataset;
      store.dispatch(deleteTodo(id));
    });
  };

  const ltoggleTodo = () => {
    $todoList.addEventListener('click', $event => {
      if (!$event.target.matches('.js-toggle-todo')) return;
      const id = todoID($event.target);
      store.dispatch(toggleTodo(id));
    });
  };

  ltoggleTodo();
  lremoveTodo();
  laddTodo();

  const render = state => {
    $todoDetails.innerHTML = todoDetails(state);
    $todoList.innerHTML = todoList(state);
  };

  return { render };
};

export default Todo;
