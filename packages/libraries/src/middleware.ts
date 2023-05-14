import { redirect } from 'react-router-dom'
import helpCookie from '@arutek/package-helpers/src/cookie'

export default {
  isAuthenticated (authPath:string) {
    console.log('middleware')
    if (!helpCookie.getAuthCookie()) return redirect(authPath)
    return null
  }
}