import React from "react"
import task from "../models/Task"
import Task from "./Task"
import classes from "./Tasks.module.css"
// Tasks là một array chứa một hoặc nhiều object
// Tasks = [{Task},{Task},....]
interface Props {
  items: task[]
  onDeleteTask: (id: string) => void
}

const Tasks = ({ items, onDeleteTask }: Props) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <Task
          onDeleteTask={onDeleteTask.bind(null, item.id)}
          key={item.id}
          text={item.text}
        ></Task>
      ))}
    </ul>
  )
}
export default Tasks
