import { redirect } from 'react-router-dom'
import helpCookie from '@arutek/package-helpers/src/cookie'

export default {
  isAuthenticated (authPath:string, level = 100) {
    if (!helpCookie.getAuthCookie()) return redirect(authPath)
    if (parseInt(helpCookie.getCookie('roleId')) > level) return redirect('/')
    return null
  },
  logout (authPath:string) {
    helpCookie.delAuthCookie()
    return redirect(authPath)
  }
}