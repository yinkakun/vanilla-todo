import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes';
import UUID from '../utils/uuid';

const addTodo = todo => ({ type: ADD_TODO, name: todo, id: UUID() });

const deleteTodo = id => ({ type: DELETE_TODO, id });

const toggleTodo = id => ({ type: TOGGLE_TODO, id });

export { addTodo, deleteTodo, toggleTodo };
