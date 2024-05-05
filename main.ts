import inquirer from "inquirer";

let todos = [];
let condition = true;
while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "what do you what to add in your todo",
    },

    {
      name: "addMore",
      type: "confirm",
      message: "Do you want to add more ?",
      default: "false",
    },
  ]);
  todos.push(addTask.todo);
  condition = addTask.addMore;
  console.log(todos);
}
