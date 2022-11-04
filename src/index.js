/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */
import './style.css';
import { addList, displayList, } from './modules/app.js';
import localGet from './modules/localstorage.js';

const form = document.querySelector('.list-con');
const todoTask = document.getElementById('input');

window.addEventListener('load', () => {
  displayList();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addList(todoTask.value, false, localGet().length + 1);
  displayList();
});
