// import task from "../models/Task";
// import { idText } from "typescript";
import classes from "./Task.module.css";
const Task: React.FC<{ text: string; onDeleteTask: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onDeleteTask}>
      {props.text}
    </li>
  );
};
export default Task;
