import React, { useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";
import Task from "./models/Task";
import NewTask from "./components/NewTask";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTaskHandler = (task: string) => {
    const newTask = new Task(task);

    setTasks((prev) => {
      return prev.concat(newTask);
    });
    
  };

  const onDeleteTaskHandler = (id: string) => {
    setTasks((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div>
      <NewTask onAddTask={addTaskHandler}></NewTask>
      <Tasks onDeleteTask={onDeleteTaskHandler} items={tasks} />
    </div>
  );
}

export default App;
