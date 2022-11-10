import {
  addList, removeList, updateChecked, updateList,
} from './app.js';
import clearCompleted from './deleteAll.js';

document.body.innerHTML = `<section>
<div class="todolist-con">
    <h1 class="todo-header">Today's To Do</h1>
    <form class="list-con">
        <input type="text" name="text" id="input" placeholder="Add to your list">
        <button type="submit" id="added"><i class=" add">add</i></button>
    </form>
    <div id="listItem"></div>
    <div class="btn-con">
        <button id="Completedbtn">Clear Completed Tasks</button>
    </div>
</div>
</section>`;

describe('When we do basic add, delete', () => {
  test('if we add an item it should have one list', () => {
    addList('Hi I am Hein', false, 0);
    const data = document.querySelectorAll('.toDoItem');
    expect(data).toHaveLength(1);
  });
  test('if we add another item', () => {
    addList('hi im oti', false, 1);
    const data = document.querySelectorAll('.toDoItem');
    expect(data).toHaveLength(2);
  });
  test('if we add another item', () => {
    addList('hi im hien two', false, 2);
    const data = document.querySelectorAll('.toDoItem');
    expect(data).toHaveLength(3);
  });
  test('if we remove an item it should remove one list', () => {
    removeList(0);
    const data = document.querySelectorAll('.toDoItem');
    expect(data).toHaveLength(2);
  });
  test('if we update an item', () => {
    document.querySelector('#input-0').value = 'im oti';
    updateList(0);
    const data = JSON.parse(localStorage.getItem('listStorage'));
    const filtereData = data.filter((item) => item.index === 1);
    expect(filtereData[0].description).toBe('im oti');
  });
  test('if we check an item', () => {
    document.querySelector('#check-0').checked = true;
    updateChecked(0);
    const data = JSON.parse(localStorage.getItem('listStorage'));
    const filtereData = data.filter((item) => item.index === 1);
    expect(filtereData[0].completed).toBe(true);
  });
  test('if we remove all completed items', () => {
    clearCompleted();
    const data = JSON.parse(localStorage.getItem('listStorage'));
    const filtereData = data.filter((item) => item.completed === true);
    expect(filtereData).toHaveLength(0);
  });
});
