import { BehaviorSubject } from 'rxjs'

interface userType {
  fullname: string,
  username: string,
  email: string,
  roleId: string,
}

const user = new BehaviorSubject<userType>({
  fullname: '',
  username: '',
  email: '',
  roleId: '',
})

const setUser = (val:userType) => {
  user.next({
    fullname: val.fullname,
    username: val.username,
    email: val.email,
    roleId: val.roleId,
  })
}

export default {
  getUser$ () {
    return user
  },
  setUser$ (val:userType) {
    return setUser(val)
  },
}