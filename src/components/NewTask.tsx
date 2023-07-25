import { useRef } from "react"
import classes from './NewTask.module.css';
const NewTask:React.FC<{onAddTask: (text: string) => void}> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const taskEntered = inputRef.current!.value;
        if(taskEntered.trim().length === 0){
            return;
        }

        props.onAddTask(taskEntered);
    }

    return <form onSubmit={onSubmitHandler} className={classes.form} >
        <label htmlFor="text">New Task</label>
        <input id="text" type="text" ref={inputRef}></input>
        <button>Add</button>
    </form>
}
export default NewTask;