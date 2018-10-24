// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  tasks.push(task);
  return task;
}


// DRIVER CODE BELOW
const tasks = []

const task1 = newTask("Clean Cat Litter", "Take out 💩"); // task 0
const task2 = newTask("Do Laundry", "😭"); // task 1


task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks)
