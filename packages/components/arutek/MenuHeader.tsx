import {useState, ReactNode} from 'react'
import { Link } from 'react-router-dom'

interface routerDataType {
  path: string,
  name: string,
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
        <nav className="flex gap-16">
          {routerList.map((item, key) => {return (
            <Link key={key} className="nav-link" to={item.main.path}>{item.main.name}</Link>
          )})}
        </nav>
      </section>
    </header>
  )
}

export default SearchBox
