// import React, { useState } from "react"
// import Tasks from "./components/Tasks"
import "./App.css"
// import Task from "./models/Task"
// import NewTask from "./components/NewTask"
import { useSelector } from "react-redux"
import { getUser } from "./features/user/userDataSlice"
import { useAppDispatch } from "./features/store"
import { increment } from "./features/counter/counter-slice"
import Login from "./components/Login"
function App() {
  //store
  const dispatch = useAppDispatch() // cải thiện độ chắc chắn và hiệu suất nếu chỉ dùng useDispatch thì sẽ có lỗi
  const { users } = useSelector((state: any) => state.users)
  const count = useSelector((state: any) => state.counter.value)
  console.log("data", users)
  // const [tasks, setTasks] = useState<Task[]>([])
  // const addTaskHandler = (data: any) => {
  //   const task = data.text
  //   const newTask = new Task(task)
  //   setTasks((prev) => {
  //     return prev.concat(newTask)
  //   })
  // }
  // const onDeleteTaskHandler = (id: string) => {
  //   setTasks((prev) => {
  //     return prev.filter((todo) => todo.id !== id)
  //   })
  // }

  const fetchUsersData = () => {
    dispatch(getUser())
  }
  const increHandler = () => {
    dispatch(increment())
  }
  return (
    <div>
      {/* <NewTask onAddTask={addTaskHandler}></NewTask>
      <Tasks onDeleteTask={onDeleteTaskHandler} items={tasks} /> */}
      {/* <Form submit={submitHandler}></Form> */}
      <button onClick={fetchUsersData}>Fetch Users Data</button>
      <button onClick={increHandler}>increment</button>
      {count}
      <Login />
    </div>
  )
}

export default App
