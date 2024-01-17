import { ChangeEvent } from 'react'

interface getterType {
  password: string,
  confPassword: string,
}
interface setterType {
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setConfPassword: React.Dispatch<React.SetStateAction<string>>,
}
interface propsType {
  getter: getterType,
  setter: setterType,
}

const LoginForm = (props:propsType) => {
  const confPasswordInputted = (e:ChangeEvent<HTMLInputElement>) => {
    props.setter.setConfPassword(e.target.value)
  }
  const passwordInputted = (e:ChangeEvent<HTMLInputElement>) => {
    props.setter.setPassword(e.target.value)
  }
  return (
    <section className="flex flex-col gap-24">
      <label className="flex flex-col gap-8">
        <p>New Password</p>
        <input
          type="password"
          className="input"
          value={props.getter.password}
          onChange={passwordInputted} />
      </label>
      <label className="flex flex-col gap-8">
        <p>New Confirm Password</p>
        <input
          type="password"
          className="input"
          value={props.getter.confPassword}
          onChange={confPasswordInputted} />
      </label>
    </section>
  )
}

export default LoginForm