// import task from "../models/Task";
// import { idText } from "typescript";
import classes from "./Task.module.css"
interface Props {
  text: string
  onDeleteTask: () => void
}
const Task = ({ text, onDeleteTask }: Props) => {
  return (
    <li className={classes.item} onClick={onDeleteTask}>
      {text}
    </li>
  )
}
export default Task
