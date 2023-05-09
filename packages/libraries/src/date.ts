import { parseISO, format } from 'date-fns'
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
   * @param isoDatetime
   * HTML formatted date, i.e, `2023-05-06T015:33 UTC+07:00` 
   * @param locale 
   * locale code in string aphabet only, i.e, 'enUS'
   * @returns 
   * Date formatted with locale, i.e, `06 May 2023`
   */
  isoToDate1 (isoDatetime:string, locale?:string) {
    return format(parseISO(isoDatetime), 'dd MMMM yyyy', {locale: getLocale(locale || 'enUS')})
  },
  /**
   * Return a `dd MMMM yyyy` date-fns formatted date
   * @param jsDate
   * HTML formatted date, i.e, `2023-05-06` 
   * @param locale 
   * locale code in string aphabet only, i.e, 'enUS'
   * @returns 
   * Date formatted with locale, i.e, `06 May 2023`
   */
  dateToDate1 (jsDate:string, locale?:string) {
    return format(new Date(jsDate), 'dd MMMM yyyy', {locale: getLocale(locale || 'enUS')})
  }
}