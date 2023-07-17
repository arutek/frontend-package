export default {
  setCookie (key:string, value:string, minute:number) {
    document.cookie = `${key}=${value}; max-age=${minute * 60}; samesite=lax; secure`
  },
  getCookie (key:string) {
    const cookies = document.cookie.split(';')
    const selectedCookie = cookies.find((row) => row.includes(`${key}=`))
    return selectedCookie?.split('=')[1] || ''
  },
  delCookie (key:string) {
    const cookies = document.cookie.split(';')
    const selectedCookie = cookies.find((row) => row.includes(`${key}=`))
    document.cookie = selectedCookie + ';expires=Thu, 01 Jan 1970 00:00:00 GMT'
  },
  setAuthCookie (value:string, minute:number) {
    document.cookie = `accessToken=${value}; max-age=${minute * 60}; samesite=lax; secure`
  },
  getAuthCookie () {
    const cookies = document.cookie.split(';')
    const selectedCookie = cookies.find((row) => row.includes('accessToken='))
    return selectedCookie?.split('=')[1] || ''
  },
  delAuthCookie () {
    const cookies = document.cookie.split(';')
    const selectedCookie = cookies.find((row) => row.includes('accessToken='))
    document.cookie = selectedCookie + ';expires=Thu, 01 Jan 1970 00:00:00 GMT'
  },
}
