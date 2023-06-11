import { Link } from 'react-router-dom'
import helpCookie from '@arutek/package-helpers/src/cookie'

interface routerDataType {
  path: string,
  name: string,
  child?: routerDataType[],
  accessLevel?: number,
}

interface propsType {
  routerList: routerDataType[]
}

const MenuHeader = ({routerList}:propsType) => {
  return (
    <header className="bg-white">
      <section className="typ-header-regular-normal max-w-7xl mx-auto p-20">
        <nav className="flex gap-24">
          {routerList.map((item, key) => { return ((!item.accessLevel || (item.accessLevel) >= parseInt(helpCookie.getCookie('roleId'))) &&
            <div key={key}>
              {item.child ? (
                <div className="group">
                  <p className="nav-link cursor-pointer">{item.name}</p>
                  <div className="absolute hidden group-hover:block py-20">
                    <div className={`bg-white flex flex-col gap-16 rounded shadow p-8`}>
                      {item.child.map((item2, key2) => (
                        <Link className="nav-link" key={key2} to={item2.path}>{item2.name}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link className="nav-link" to={item.path}>{item.name}</Link>
              )}
            </div>
          )})}
        </nav>
      </section>
    </header>
  )
}

export default MenuHeader
