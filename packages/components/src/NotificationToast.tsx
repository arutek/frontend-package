import { useEffect, useState } from 'react'
import notification$ from '../../core-app/stores/arutek/notification'

const classDefiner = (val:string) => {
  const basicClass = 'fixed bottom-16 right-16 rounded-lg'
  switch (val) {
  case 'success':
    return `bg-primary text-white ${basicClass}`
  case 'warn':
    return `bg-yellow-80 text-black ${basicClass}`
  case 'err':
    return `bg-red-80 text-white ${basicClass}`
  default:
    return 'hidden'
  }
}

const NotificationToast = () => {
  const [mainClass, setMainClass] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const subscription = notification$.subscribe((val) => {
      setMainClass(classDefiner(val.type))
      setMsg(val.msg)
    })
    return(() => subscription.unsubscribe())
  }, [])

  return (
    <section className={`${mainClass} text-sm w-300`}>
      <div className="px-16 py-8">{msg}</div>
    </section>
  )
}

export default NotificationToast