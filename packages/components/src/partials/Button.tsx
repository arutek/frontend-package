import { MouseEventHandler } from 'react'

interface PropsType {
  onClick?: MouseEventHandler
  textValue: string,
  padding?: 'narrow'|'wide',
  color?: 'primary'|'secondary'|'info'|'success'|'warning'|'error',
  outlined?: boolean,
}

const Button = (props: PropsType) => {
  let bgColor
  let bgHover
  let padding
  const textHover = ''
  const borderColor = ''
  const borderWidth = ''
  const textWeight = 'font-semibold'
  const textSize = 'text-sm'
  const textColor = 'text-white'
  const rounded = 'rounded'

  switch (props.padding) {
  case 'narrow':
    padding = 'p-1'
    break
  case 'wide':
    padding = 'px-4 py-2'
    break
  default:
    padding = 'px-6 py-3'
  }

  switch (props.color) {
  case 'primary':
    bgColor = 'bg-light-primary'
    bgHover = 'hover:bg-primary'
    break
  case 'secondary':
    bgColor = 'bg-light-secondary'
    bgHover = 'hover:bg-secondary'
    break
  case 'info':
    bgColor = 'bg-light-info'
    bgHover = 'hover:bg-info'
    break
  case 'success':
    bgColor = 'bg-light-success'
    bgHover = 'hover:bg-success'
    break
  case 'warning':
    bgColor = 'bg-light-warning'
    bgHover = 'hover:bg-warning'
    break
  case 'error':
    bgColor = 'bg-light-error'
    bgHover = 'hover:bg-error'
    break
  default:
    bgColor = 'bg-light-primary'
    bgHover = 'hover:bg-primary'
    break
  }

  const buttonClasses = [
    padding,
    textWeight,
    textSize,
    textColor,
    bgColor,
    textHover,
    bgHover,
    borderColor,
    borderWidth,
    rounded
  ]

  return (
    <button onClick={props.onClick} className={buttonClasses.join(' ')}>{props.textValue}</button>
  )
}

export default Button