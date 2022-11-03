import ListTemplate from './template.js';
import localGet from './localstorage.js';

const todoContent = document.getElementById('listItem');
const todoTask = document.getElementById('input');
const displayList = () => {
  todoContent.replaceChildren();
  localGet().forEach((item, id) => {
    todoContent.innerHTML += `
        <div class="toDoItem">
        <input class='item' id='check-${id}', "completed")' type='checkbox' ${item.Checked ? 'true' : 'false'} onclick='updateList(${id}, "completed")'>
        <input type="text" class='findInput' id='input-${id}' value='${item.description}' />
        <i onclick='updateList(${id}, "description")' class='fa-solid fa-file-pen' id='options-${id}'></i>
        <i onclick='removeList(${item.index})' id='delete-${item.index}'>🗑️</i>
        </div>
        `;
  });
};

const addList = (description, completed, index) => {
  const listAdded = new ListTemplate(description, completed, index);
  const x = localGet();
  x.push(listAdded);
  localStorage.setItem('listStorage', JSON.stringify(x));
  todoTask.value = '';

  displayList();
};

window.removeList = (id) => {
  const filteredArray = localGet().filter((item) => {
    if (item.index !== id) {
      return item;
    }
    return '';
  });
  localStorage.setItem('listStorage', JSON.stringify(filteredArray));

  displayList();
};

window.updateList = (id) => {
  const updateInput = document.querySelector(`#input-${id}`).value;
  const updateArray = localGet().map((item) => {
    if (item.index - 1 === id) {
      item.description = updateInput;
    }
    if (item.index - 1 === id) {
      item.completed = true;
    }
    if (item.index - 1 === !id) {
      item.completed = true;
    }
    return item;
  });

  localStorage.setItem('listStorage', JSON.stringify(updateArray));
};

export { addList, displayList };