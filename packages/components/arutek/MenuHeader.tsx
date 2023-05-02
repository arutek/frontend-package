import {useState, ReactNode} from 'react'

type propsType = {
  childComponent: ReactNode
}

const SearchBox = (props:propsType) => {
  const [cari, setCari] = useState('')
  return (
    <header className="bg-white">
      <section className="typ-header-regular-normal max-w-7xl mx-auto p-20">
        <nav className="flex gap-16">
          {props.childComponent}
          {/* {router.map((item, key) => {return (
            <Link key={key} className="nav-link" to={item.path}>{item.displayName}</Link>
          )})} */}
        </nav>
      </section>
    </header>
  )
}

export default SearchBox
