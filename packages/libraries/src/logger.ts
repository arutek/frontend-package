let envLogger
try {
  envLogger = import.meta.env.VITE_LOGGER
} catch {
  require('dotenv').config()
  envLogger = process.env.LOGGER
}

const enableLog = envLogger === 'true'

export class MeLogger {
  pre = ''
  constructor (op:any) {
    this.pre = op
  }
  log (...args:any[]) {
    if (!enableLog) return false
    const preCss = 'font-weight: bold; padding: 4px 8px; color: white; background-color: black'
    Array.prototype.unshift.call(args, `%c[${this.pre}]:\n`, preCss)
    console.log.apply(this, args)
  }
  error (...args:any[]) {
    if (!enableLog) return false
    const preCss = 'font-weight: bold; padding: 4px 8px; color: white; background-color: red'
    Array.prototype.unshift.call(args, `%c[${this.pre}]:\n`, preCss)
    console.error.apply(this, args)
  }
}