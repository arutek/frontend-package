import { ChangeEvent } from 'react'

interface InputProps {
  className?: string,
  placeholder?: string,
  labelText?: string,
  onInputChange?: (text: string) => void,
}

const Input = (props: InputProps) => {
  const padding = 'px-4 py-3'
  const borderRadius = 'rounded'
  const borderWidth = 'border'
  const borderColor = 'border-background-light'
  const placeholderColor = 'placeholder:text-background-light'
  const classes = [
    padding,
    borderRadius,
    borderWidth,
    borderColor,
    placeholderColor,
  ]

  const changeTextValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onInputChange) props.onInputChange(e.target.value)
  }

  return (
    <label className={props.className || ''}>
      {props.labelText && (<p className="mb-2">{props.labelText}</p>)}
      <input onChange={(e) => changeTextValue(e)} type="text" className={classes.join(' ')} placeholder={props.placeholder || ''} />
    </label>
  )
}

export default Input