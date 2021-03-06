import React from "react";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  console.log('RERANDER')
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} validate={[required]}
               name={"login"} component={Input}/>
      </div>
      <div>
        <Field placeholder={"Password"} validate={[required]}
               name={"password"} component={Input}/>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>

    </form>
  )
}
const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm)

const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}
export default Login