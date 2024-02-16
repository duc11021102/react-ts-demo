import React from "react"
import { useForm } from "react-hook-form"
import classes from "./Login.module.css"
import { useAppDispatch } from "../features/store"
import { useSelector } from "react-redux"
import userLogin from "../features/auth/authActions"
interface IFormInput {
  username: string
  password: string
}
// johnd
// m38rmF$
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const dispatch = useAppDispatch()
  const { userToken } = useSelector((state: any) => state.auth)
  const onSubmit = (data: IFormInput) => {
    dispatch(userLogin(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <label>Username</label>
      <input
        {...register("username", { required: true, minLength: 2 })}
      ></input>
      {errors.username ? <p>Please enter username length than 2 </p> : null}
      <label>Password</label>
      <input
        {...register("password", { required: true, minLength: 6 })}
      ></input>
      {errors.password ? <p>Please enter password length than 6 </p> : null}
      <input type="submit" />
      {userToken && userToken}
    </form>
  )
}

export default Login
