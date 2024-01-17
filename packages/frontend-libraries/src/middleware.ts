import { redirect } from 'react-router-dom'
import helpCookie from '@arutek/core-app/helpers/cookie'

interface userDataType {
  roleId: number,
}

const roleId = () => {
  const userData = JSON.parse(helpCookie.getCookie('userData')) as userDataType
  return userData.roleId
}

export default {
  isAuthenticated (authPath:string, level = 100) {
    if (!helpCookie.getAuthCookie()) return redirect(authPath)
    if (roleId() > level) return redirect('/')
    return null
  },
  logout (authPath:string) {
    helpCookie.delAuthCookie()
    return redirect(authPath)
  }
}