/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */
import './style.css';

const toDoList = [
  {
    description: 'hello world',
    completed: true,
    index: 1,
  },
  {
    description: 'wash plate',
    completed: false,
    index: 2,
  },
  {
    description: 'cook beans',
    completed: true,
    index: 3,
  },
];

toDoList.forEach((e) => {
  const { description, completed, index } = e;
  const ulLists = document.querySelector('.ul-items');

  const list = document.createElement('li');
  list.setAttribute('class', 'list');
  list.setAttribute('id', index);
  ulLists.appendChild(list);

  const checkCon = document.createElement('div');
  checkCon.className = 'checkbox-con';
  list.appendChild(checkCon);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = completed;
  checkCon.appendChild(checkbox);

  const paragraph = document.createElement('p');
  paragraph.textContent = description;
  checkCon.appendChild(paragraph);

  const ellipsis = document.createElement('i');
  ellipsis.setAttribute('class', 'fa fa-ellipsis-v');
  list.appendChild(ellipsis);
});