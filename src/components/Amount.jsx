import { useEffect, useState } from "react"
import useNumToStr from "../hooks/useNumToStr"
import style from "../styles/amount.module.css"

const Amount = ({label,name,value,onChange}) => {
    const [numericalRial, setNumericalRial] = useState("")
    useEffect(() => {
        useNumToStr(value,setNumericalRial)
    }, [value])

    return (
    <>
        <label htmlFor={name}>{label}</label>
        <input type="number" name={name} id={name} value={value} onChange={onChange} />
        <p className={style.stringAmount}>{numericalRial}</p>
    </>
  )
}

export default Amount