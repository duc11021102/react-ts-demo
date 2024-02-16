import React, { useState } from "react"
import classes from "./NewTask.module.css"
import { SubmitHandler, useForm } from "react-hook-form"

interface Props {
  submit: (value: object) => void
}
interface IFormInput {
  title: string
  requestItem: string
  integration: string
}
const requestItem = [
  { id: 1, code: "dm_request", desc: "DM Request" },
  { id: 2, code: "dataset_request", desc: "DataSet Request" },
  { id: 3, code: "author", desc: "Author" },
]
const integration = [
  { id: 1, code: "new", desc: "New" },
  { id: 2, code: "modifier", desc: "Modifier" },
]
export const Form = ({ submit }: Props) => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const [requestItems, setRequestItems] = useState<string>()
  const [creation, setCreation] = useState<number>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    setRequestItems(event.target.value)
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <input {...register("title")}></input>
      </div>
      <div>
        <label>Request Item</label>
        <select {...register("requestItem")} onChange={handleSelectChange}>
          {requestItem.map((option) => (
            <option key={option.id} value={option.code}>
              {option.desc}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Inregration type</label>
        <select
          disabled={
            requestItems === "dm_request" || requestItems === "dataset_request"
              ? true
              : false
          }
          {...register("integration")}
        >
          {integration.map((option) => (
            <option key={option.id}>{option.desc}</option>
          ))}
        </select>
      </div>
      <div className={classes.wrapbtn}>
        <button
          className={creation === 0 ? classes.btnActive : classes.btn}
          onClick={() => {
            setCreation(0)
          }}
        >
          entire
        </button>
        <button
          className={creation === 1 ? classes.btnActive : classes.btn}
          onClick={() => {
            setCreation(1)
          }}
        >
          today
        </button>
        <button
          className={creation === 2 ? classes.btnActive : classes.btn}
          onClick={() => {
            setCreation(2)
          }}
        >
          this week
        </button>
        <button
          className={creation === 3 ? classes.btnActive : classes.btn}
          onClick={() => {
            setCreation(3)
          }}
        >
          this month
        </button>
        <button
          className={creation === 4 ? classes.btnActive : classes.btn}
          onClick={() => {
            console.log(creation)
            setCreation(4)
          }}
        >
          chose your own
        </button>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}
