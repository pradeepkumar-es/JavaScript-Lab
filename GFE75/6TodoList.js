/*
You're given some existing HTML for a Todo List app. Add the following functionality to the app:

Add new tasks on clicking the "Submit" button.
The <input> field should be cleared upon successful addition.
Treat task input as plain text; user-provided markup must not be interpreted as HTML.
Remove tasks from the Todo List upon clicking the "Delete" button.
Give the task input an accessible label so the form is operable with assistive technology.

Notes
The focus of this question is on functionality, not styling. There's no need to write any custom CSS.
You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc.), but the result should remain the same visually.
You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).
Hints
New
Hint 1: Separate identity from the label
Each task needs an identity that stays stable even if two tasks have the same text. Use that identity when deleting so the activated button removes exactly its own task.

Hint 2: Complete each form transition
Treat a successful submission as one transition that appends the new task and then clears the input. Route deletion through one handler that can determine the intended task without depending on its current visual position.

Hint 3: Treat user input as text
Insert task labels through text-only DOM operations such as textContent, never through HTML parsing. Keep the input labeled and use native form and button elements; a polite live region can additionally announce newly added tasks.
*/

import { useState } from "react";
export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    "Walk the dog",
    "Water the plants",
    "Wash the dishes",
  ]);

  function handleSubmit() {
    if (task != "") {
      setTasks((prev) => [...prev, task]);
      setTask("");
    }
  }
  function handleDelete(index) {

    //below is custom code solution, we can also use inbuilt array method like filter, splice
   /*
    const currentTasks = [...tasks];
    if (index == currentTasks.length - 1) {
      //if last task
      currentTasks.pop();
    }else{
      //clicked other than last element
    for (let i = 0; i < currentTasks.length; i++) {
      if(i==currentTasks.length-1){
        currentTasks.pop(); //remove last element as it will be already shifted to previus index
      }else if(i >= index && index !== currentTasks.length - 1){
        currentTasks[i] = currentTasks[i + 1]; //override deleted task with next task and shift all later tasks usign iteration
      }
    }
    }
    setTasks(currentTasks);
*/

//below is shortcut method using array inbuilt method filter
/*
const newTasks = tasks.filter((item,i)=>i!==index);//does not mutate original array and give new array
setTasks(newTasks)
*/

//below i shortcut method using array inbuilt method splice
let newTasks = [...tasks]
newTasks.splice(index,1) //mutate original array hence 1st copy array and then implement and  it return removed array of removed elements
setTasks(newTasks);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <label htmlFor="inputTask">Task</label>
        <input
          id="inputTask"
          type="text"
          placeholder="Add your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map((task, i) => {
          return (
            <li key={i}>
              <span>{task}</span>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
