import React from "react";
import task from "../models/Task";
import Task from "./Task";
import classes from "./Tasks.module.css";
// Tasks là một array chứa một hoặc nhiều object
// Tasks = [{Task},{Task},....]

const Tasks: React.FC<{ items: task[]; onDeleteTask: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Task
          onDeleteTask={props.onDeleteTask.bind(null, item.id)}
          key={item.id}
          text={item.text}
        ></Task>
      ))}
    </ul>
  );
};
export default Tasks;
