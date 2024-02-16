import classes from "./NewTask.module.css"
import { useForm } from "react-hook-form"
export interface task {
  text: string
}
interface Props {
  onAddTask: (data: task) => void
}

const NewTask = ({ onAddTask }: Props) => {
  const { register, handleSubmit, reset } = useForm()

  const submit = (data: any) => {
    // event.preventDefault()
    onAddTask(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={classes.form}>
      <label htmlFor="text">New Task</label>
      <input {...register("text", { required: true, maxLength: 20 })}></input>
      <button>Add</button>
    </form>
  )
}
export default NewTask
