import { Link } from 'react-router-dom'
import helpCookie from '@arutek/package-helpers/src/cookie'

interface routerDataType {
  path: string,
  name: string,
  accessLevel?: number,
}
interface routerListDataType {
  main: routerDataType,
  child?: routerDataType,
  grandchild?: routerDataType,
}

interface propsType {
  routerList: routerListDataType[]
}

const SearchBox = ({routerList}:propsType) => {
  
  return (
    <header className="bg-white">
      <section className="typ-header-regular-normal max-w-7xl mx-auto p-20">
        <nav className="flex gap-24">
          {routerList.map((item, key) => {return ((item.main.accessLevel || 100 ) >= parseInt(helpCookie.getCookie('roleId')) &&
            <Link key={key} className="nav-link" to={item.main.path}>{item.main.name}</Link>
          )})}
        </nav>
      </section>
    </header>
  )
}

export default SearchBox
