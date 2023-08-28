const fs = require("fs");
const { type } = require("os");
const filePath = process.env.filePath || "./db.json";

createFileIfNotExist();

function createFileIfNotExist() {
  const exists = fs.existsSync(filePath);
  if (!exists) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
}

function getID(data) {
  if (data.length == 0) return 1;
  return data[data.length - 1].id + 1;
}

function readJSONFile() {
  //   read array json file
  const todos = fs.readFileSync(filePath, "utf8");
  const parsedTodos = JSON.parse(todos);
  return parsedTodos;
}

/*------ FUNCTIONS FOR ROUTES -----------*/

// LIST FUNCTION
function getTodos(list) {
  const todoList = readJSONFile();
  const todosToReturn = [];

  if (list != "all") {
    if (list == "checked") {
      todoList.forEach((todo) => {
        if (todo.checked) todosToReturn.push(todo);
      });
      console.log("Get checked todos");
    } else if (list == "unchecked") {
      todoList.forEach((todo) => {
        if (!todo.checked) todosToReturn.push(todo);
      });
      console.log("Get unchecked todos");
    }
    return todosToReturn;
  } else {
    console.log("Get all todos");
    return todoList;
  }
}

// GET A SPECIFIC TODO FUNCTION
function getTodo(id) {
  console.log("Into the find todo by id fun");
  const todoList = readJSONFile();
  let todoToReturn = false;
  todoList.forEach((todo) => {
    if (todo.id == id) {
      console.log("Todo Found.");
      todoToReturn = todo;
    }
  });
  return todoToReturn || `No Todo with id ${id} was found!`;
}

// ADD TODO FUNCTION
function add(data) {
  const todoList = readJSONFile();

  //   create todo item
  const todo = {
    checked: false,
    ...data,
    id: getID(todoList), //get id of last element+1
  };

  //   push new todo object to array
  todoList.push(todo);
  fs.writeFileSync(filePath, JSON.stringify(todoList));

  console.log("Todo added.");
  return todo;
}

// EDIT FUNCTION
function edit(id, editBody) {
  const todoList = readJSONFile();
  let todoToEdit = false;
  todoList.forEach((todo) => {
    if (todo.id == id) {
      todo.title = editBody.title || todo.title;
      todo.body = editBody.body || todo.body;
      todo.checked = "checked" in editBody ? editBody.checked : todo.checked;
      todoToEdit = todo;
    }
  });
  fs.writeFileSync(filePath, JSON.stringify(todoList));
  console.log("Todo edited.");
  return todoToEdit || `No Todo with id ${id} was found!`;
}

// REMOVE FUNCTION
function remove(id) {
  const todoList = readJSONFile();

  fs.writeFileSync(
    filePath,
    JSON.stringify(todoList.filter((todo) => todo.id != id))
  );
  console.log("Todo removed.");
}

// CHECK FUNCTION
function check(id) {
  const todoList = readJSONFile();
  let todoToEdit = false;
  todoList.forEach((todo) => {
    if (todo.id == id) {
      todo.checked = true;
      todoToEdit = todo;
    }
  });
  fs.writeFileSync(filePath, JSON.stringify(todoList));
  console.log("Todo edited.");
  return todoToEdit || `No Todo with id ${id} was found!`;
}

// UNCHECK FUNCTION
function uncheck(id) {
  const todoList = readJSONFile();
  const IDToEdit = id;
  todoList.forEach((todo) => {
    if (todo.id == IDToEdit) {
      todo.checked = false;
    }
  });
  fs.writeFileSync(filePath, JSON.stringify(todoList));
  console.log("Todo unchecked.");
}

module.exports = {
  getTodos,
  getTodo,
  add,
  edit,
  remove,
  check,
  uncheck,
};
