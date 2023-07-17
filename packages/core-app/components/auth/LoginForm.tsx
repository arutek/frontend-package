import { ChangeEvent } from 'react'

interface getterType {
  credential: string,
  password: string,
}
interface setterType {
  setCredential: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
}
interface propsType {
  getter: getterType,
  setter: setterType,
}

const LoginForm = (props:propsType) => {
  const credentialInputted = (e:ChangeEvent<HTMLInputElement>) => {
    props.setter.setCredential(e.target.value)
  }
  const passwordInputted = (e:ChangeEvent<HTMLInputElement>) => {
    props.setter.setPassword(e.target.value)
  }
  return (
    <section className="flex flex-col gap-24">
      <label className="flex flex-col gap-8">
        <p>Credential</p>
        <input
          type="text"
          placeholder="Email or Username"
          className="input"
          value={props.getter.credential}
          onChange={credentialInputted} />
      </label>
      <label className="flex flex-col gap-8">
        <p>Password</p>
        <input
          type="password"
          className="input"
          value={props.getter.password}
          onChange={passwordInputted} />
      </label>
    </section>
  )
}

export default LoginForm