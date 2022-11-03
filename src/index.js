/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */
import './style.css';
import { addList, displayList } from './modules/app.js';
import localGet from './modules/localstorage.js';

const addBtn = document.getElementById('added');
const todoTask = document.getElementById('input');

window.addEventListener('load', () => {
    displayList();
});

addBtn.addEventListener('click', () => {
  addList(todoTask.value, false, localGet.length + 1);
  displayList();
})
