import { BehaviorSubject } from 'rxjs'

interface notificationType {
  type: 'success'|'warn'|'err'|'',
  msg: string,
}

const notification = new BehaviorSubject<notificationType>({
  type: '',
  msg: '',
})

export default notification