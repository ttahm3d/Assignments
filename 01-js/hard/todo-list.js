/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = new Array();
  }

  add(todo) {
    return this.todos.push(todo);
  }

  remove(indexOfTodo) {
    const test = this.todos.filter((todo, index) => {
      if (indexOfTodo !== index) return todo;
    });
    this.todos = test;
  }

  update(index, updatedTodo) {
    this.todos = this.todos.map((todo, i) =>
      i === index ? updatedTodo : todo
    );
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    console.log(
      indexOfTodo,
      this.todos.length,
      indexOfTodo > this.todos.length
    );
    if (indexOfTodo >= this.todos.length) return null;
    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
