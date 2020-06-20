import './index.css';
import { createStore } from 'redux';
import todos from './store/reducer';
import { loadState, saveState } from './utils/localStorage';
import todoapp from './views/todoapp';

const persistedState = loadState();

const store = createStore(todos, persistedState);
const todoApp = todoapp(store);
store.subscribe(() => saveState(store.getState()));
store.subscribe(() => todoApp.render(store.getState()));
todoApp.render(store.getState());

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}
