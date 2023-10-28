import { formatISO, parseISO, intervalToDuration, getUnixTime } from 'date-fns'
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
   * @param locale string that represent locale, i.e, `enUS` for English (US)
   * @returns Date formatted with locale, i.e, `06 May 2023`
   */
  isoToDate1 (isoDatetime:string, locale?:string):string {
    if (getUnixTime(parseISO(isoDatetime)) <= 1 || !isoDatetime) return '-'
    return format(parseISO(isoDatetime), 'dd MMMM yyyy', {locale: getLocale(locale || 'enUS')})
  },
  /**
   * Return a `yyyy-MM-dd` date-fns formatted date
   * @param isoDatetime HTML formatted date, i.e, `2023-05-06T015:33 UTC+07:00`
   * @param locale string that represent locale, i.e, `enUS` for English (US)
   * @returns Date formatted with locale, i.e, `2023-09-29`
   */
  isoToHtmlDate (isoDatetime:string, locale?:string):string {
    try {
      if (getUnixTime(parseISO(isoDatetime)) <= 1 || !isoDatetime) return ''
      return format(parseISO(isoDatetime), 'yyyy-MM-dd', {locale: getLocale(locale || 'enUS')})
    } catch {
      return "1970-01-01"
    }
  },
  /**
   * Return a ISO8601 formatted date
   * @param htmlDate HTML formatted date, i.e, `2023-05-06`
   * @param tz timezone, i.e, `Asia/Jakarta`
   * @returns ISO8601 with timezone, i.e, `2023-05-06T015:33 UTC+07:00`
   */
  htmlDateToIso (htmlDate:string, tz?:string):string {
    const date = zonedTimeToUtc(htmlDate, tz || 'UTC')
    return formatISO(date)
  },
  /**
   * Return a ISO8601 formatted date
   * @param htmlDate HTML formatted date, i.e, `2023-05-06`
   * @param locale string that represent locale, i.e, `enUS` for English (US)
   * @param tz timezone, i.e, `Asia/Jakarta`
   * @returns Date formatted with locale, i.e, `06 May 2023`
   */
  htmlDateToDate1 (htmlDate:string, locale?:string, tz?:string):string {
    if (!htmlDate || htmlDate === '') return '-'
    try {
      const date = zonedTimeToUtc(htmlDate, tz || 'UTC')
      return format(date, 'dd MMMM yyyy', {locale: getLocale(locale || 'enUS')})
    } catch {
      return '-'
    }
  },
  /**
   * Return a ISO8601 formatted date
   * @param htmlDate HTML formatted month, i.e, `2023-05`
   * @param tz timezone, i.e, `Asia/Jakarta`
   * @returns ISO8601 with timezone, i.e, `2023-05-06T015:33 UTC+07:00`
   */
  htmlMonthToIso (htmlDate:string, tz?:string):string {
    const date = zonedTimeToUtc(htmlDate, tz || 'UTC')
    return formatISO(date)
  },
  /**
   * Return a `yyyy-MM` date-fns formatted date
   * @param jsDate JS date, built with `new Date()`
   * @returns HTML Month formatted with locale, i.e, `2023-09`
   */
  jsDateToHtmlMonth (jsDate:Date, locale?:string):string {
    return format(jsDate, 'yyyy-MM', {locale: getLocale(locale || 'enUS')})
  },
  /**
   * Return a `yyyy-MM-dd` date-fns formatted date
   * @param jsDate JS date, built with `new Date()`
   * @returns HTML Month formatted with locale, i.e, `2023-09-29`
   */
  jsDateToHtmlDate (jsDate:Date, locale?:string):string {
    return format(jsDate, 'yyyy-MM-dd', {locale: getLocale(locale || 'enUS')})
  },
  /**
   * Return a ISO8601 formatted date
   * @param jsDate JS date, built with `new Date()`
   * @returns ISO8601 with timezone, i.e, `2023-05-06T015:33 UTC+07:00`
   */
  jsDateToIso (jsDate:Date):string {
    return formatISO(jsDate)
  },
  intervalToDuration (interval:Interval) {
    return intervalToDuration(interval)
  },
  /**
   * Return a JS formatted date
   * @param days number of added day(s)
   * @returns JS formatted date
   */
  jsDateAddDays (days:number) {
    const date = new Date()
    date.setDate(date.getDate() + days)
    return date
  }
}