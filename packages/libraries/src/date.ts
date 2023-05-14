import { formatISO, parseISO } from 'date-fns'
import { zonedTimeToUtc, format } from 'date-fns-tz'
import { id, enUS } from 'date-fns/locale'

const localeKey = {
  id,
  enUS,
}

const getLocale = (key:string) => {
  const keys = Object.keys(localeKey)
  const vals = Object.values(localeKey)
  return vals[keys.indexOf(key)]
}

export default {
  /**
   * Return a `dd MMMM yyyy` date-fns formatted date
   * @param isoDatetime HTML formatted date, i.e, `2023-05-06T015:33 UTC+07:00`
   * @returns Date formatted with locale, i.e, `06 May 2023`
   */
  isoToDate1 (isoDatetime:string, locale?:string):string {
    return format(parseISO(isoDatetime), 'dd MMMM yyyy', {locale: getLocale(locale || 'enUS')})
  },
  /**
   * Return a `dd MMMM yyyy` date-fns formatted date
   * @param jsDate HTML formatted date, i.e, `2023-05-06`
   * @param tz timezone, i.e, `Asia/Jakarta`
   * @returns Date formatted with locale, i.e, `2023-05-06T015:33 UTC+07:00`
   */
  dateToIso (jsDate:string, tz?:string):string {
    const date = zonedTimeToUtc(jsDate, tz || 'UTC')
    return formatISO(date)
  },
}