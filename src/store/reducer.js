import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          completed: false,
          name: action.name
        }
      ];

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
};

export default todos;
