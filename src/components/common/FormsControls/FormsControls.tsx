import React from "react";
import styles from "./FormsControls.module.css"
import {WrappedFieldProps} from "redux-form";

const FormControl:React.FC<WrappedFieldProps> = ({meta, children}) => {
  const hasError = (meta.error === "Field is required") ? meta.touched : Boolean(meta.error)
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {children}
      </div>
      {hasError && <span> {meta.error} </span>}
    </div>
  )
}

export const Textarea = (props:WrappedFieldProps ) => {
  const {input, meta,  ...restProps} = props
  return (
    <FormControl {...props}><textarea {...restProps} {...input}/></FormControl>

  )
}
export const Input = (props:WrappedFieldProps) => {
  const {input, meta,  ...restProps} = props
  return (
    <FormControl {...props}><input {...restProps} {...input}/></FormControl>

  )
}