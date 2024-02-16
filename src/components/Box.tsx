import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

interface IFormInput {
  createBy: string
}

interface ICheckBox {
  type: string
  value: string
  codeDtl: string
  checked: boolean
  handleCheckboxChange: (type: string, codeDtl: string) => void
}

const statusCall = [
  { codeDtl: "01", codeDtlName: "request", desc: "request" },
  { codeDtl: "02", codeDtlName: "review", desc: "review" },
  { codeDtl: "03", codeDtlName: "proceed", desc: "proceed" },
  { codeDtl: "04", codeDtlName: "complete", desc: "complete" },
]

const categoryCall = [
  { codeDtl: "05", codeDtlName: "request", desc: "request" },
  { codeDtl: "06", codeDtlName: "data_extraction", desc: "data_extraction" },
  { codeDtl: "07", codeDtlName: "inquiry", desc: "inquiry" },
]

const Box = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const [status, setStatus] = useState<string[]>(
    statusCall.map((option) => option.codeDtl)
  )
  const [category, setCategory] = useState<string[]>(
    categoryCall.map((option) => option.codeDtl)
  )

  useEffect(() => {
    setStatus(statusCall.map((option) => option.codeDtl))
    setCategory(categoryCall.map((option) => option.codeDtl))
  }, [])

  const handleCheckboxChange = (type: string, codeDtl: string) => {
    if (type === "category") {
      const newCategory = category.includes(codeDtl)
        ? category.filter((code) => code !== codeDtl)
        : [...category, codeDtl]
      setCategory(newCategory)
    } else if (type === "status") {
      const newStatus = status.includes(codeDtl)
        ? status.filter((code) => code !== codeDtl)
        : [...status, codeDtl]
      setStatus(newStatus)
    }
  }

  const submit = handleSubmit((formData: IFormInput) => {
    console.log({ ...formData, status: status, category: category })
  })

  const CheckBox = ({
    type,
    value,
    codeDtl,
    checked,
    handleCheckboxChange,
  }: ICheckBox) => {
    return (
      <div>
        <input
          checked={checked}
          onChange={() => handleCheckboxChange(type, codeDtl)}
          type="checkbox"
        />
        <span>{value}</span>
      </div>
    )
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>Title</label>
        <input {...register("createBy")} />
      </div>
      <div>
        {statusCall.map((option) => (
          <CheckBox
            key={option.codeDtl}
            type="status"
            value={option.codeDtlName}
            codeDtl={option.codeDtl}
            checked={status.includes(option.codeDtl)}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
      <div>-----------------------------------</div>
      <div>
        {categoryCall.map((option) => (
          <CheckBox
            key={option.codeDtl}
            type="category"
            value={option.codeDtlName}
            codeDtl={option.codeDtl}
            checked={category.includes(option.codeDtl)}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Box
