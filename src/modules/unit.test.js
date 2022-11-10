// import { JSDOM } from 'jsdom';
import { addList, removeList } from './app.js';

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
    addList('hi im oti', true, 1);
    const data = document.querySelectorAll('.toDoItem');
   expect(data).toHaveLength(2);
  })
  test('if we remove an item it should remove one list', () => {
    removeList(0);
    const data = document.querySelectorAll('.toDoItem');
    expect(data).toHaveLength(1);
  });
});
