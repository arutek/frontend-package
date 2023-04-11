import notification$ from '@arutek/package-stores/arutek/notification'

let intervalId:number

const notifyHide = () => {
  clearInterval(intervalId)
  intervalId = setInterval(() => notification$.next({type: '', msg: ''}), 2500)
}

export default {
  notifySuccess (msg:string) {
    notification$.next({type: 'success', msg})
    notifyHide()
  },
  notifyWarn (msg:string) {
    notification$.next({type: 'warn', msg})
    notifyHide()
  },
  notifyError (msg:string) {
    notification$.next({type: 'err', msg})
    notifyHide()
  }
}