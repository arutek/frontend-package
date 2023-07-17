import { Link } from 'react-router-dom'
import helpCookie from '../helpers/cookie'

interface routerDataType {
  path: string,
  name: string,
  parameters?: object,
  child?: routerDataType[],
  accessLevel?: number,
}
interface userDataType {
  roleId: number,
}

interface propsType {
  routerList: routerDataType[]
}

const toRoute = (routerData: routerDataType) => {
  if (routerData.parameters) {
    const param = new URLSearchParams(routerData.parameters as string[][])
    return routerData.path + '?' + param
  }
  return routerData.path
}

const roleId = () => {
  let userData: userDataType
  try {
    userData = JSON.parse(helpCookie.getCookie('userData'))
    return userData.roleId
  } catch {
    return 99
  }
}

const MenuHeader = ({routerList}:propsType) => {
  return (
    <header className="relative bg-white z-10">
      <section className="typ-header-regular-normal max-w-7xl mx-auto p-20">
        <nav className="flex gap-24">
          {routerList.map((item, key) => { return ((!item.accessLevel || (item.accessLevel) >= roleId()) &&
            <div key={key}>
              {item.child ? (
                <div className="group">
                  <p className="nav-link cursor-pointer">{item.name}</p>
                  <div className="absolute hidden group-hover:block py-20">
                    <div className={`bg-white flex flex-col gap-16 rounded shadow p-8`}>
                      {item.child.map((item2, key2) => (
                        <Link className="nav-link" key={key2} to={toRoute(item2)}>{item2.name}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link className="nav-link" to={toRoute(item)}>{item.name}</Link>
              )}
            </div>
          )})}
        </nav>
      </section>
    </header>
  )
}

export default MenuHeader
