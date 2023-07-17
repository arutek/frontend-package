import { ChangeEvent } from 'react'

interface getterType {
  email: string,
  password: string,
  confPass: string,
}
interface setterType {
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setConfPass: React.Dispatch<React.SetStateAction<string>>,
}
interface propsType {
  getter: getterType,
  setter: setterType,
}

const RegisterForm = (props:propsType) => {
  const emailInputted = (e:ChangeEvent<HTMLInputElement>) => {
    props.setter.setEmail(e.target.value)
  }
  const passwordInputted = (e:ChangeEvent<HTMLInputElement>) => {
    props.setter.setPassword(e.target.value)
  }
  const confPassInputted = (e:ChangeEvent<HTMLInputElement>) => {
    props.setter.setPassword(e.target.value)
  }
  return (
    <section className="flex flex-col gap-24">
      <label className="flex flex-col gap-8">
        <p>Email</p>
        <input
          type="text"
          className="input"
          value={props.getter.email}
          onChange={emailInputted} />
      </label>
      <label className="flex flex-col gap-8">
        <p>Password</p>
        <input
          type="text"
          className="input"
          value={props.getter.password}
          onChange={passwordInputted} />
      </label>
      <label className="flex flex-col gap-8">
        <p>Re-enter Password</p>
        <input
          type="text"
          className="input"
          value={props.getter.confPass}
          onChange={confPassInputted} />
      </label>
    </section>
  )
}

export default RegisterForm