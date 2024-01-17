interface TabProps {
  text: string[],
  selectedTab: string,
  setSelectedTab: (tab: string) => void,
}

const Tab = (props: TabProps) => {
  const margin = '-mb-0.125'
  const padding = 'px-5 py-3'
  const border = 'border-b'
  const activeClass = 'border-primary text-primary'
  const defaultClass = 'border-background-light'
  const baseClasses = [margin, padding, border]
  const activeClasses = [...baseClasses, activeClass]
  const defaultClasses = [...baseClasses, defaultClass]
  const changeSelectedTab = (tab: string) => {
    props.setSelectedTab(tab)
  }
  return (
    <section className='border-b border-background-light mb-5'>
      {props.text.map((item, key) => (
        <button
          key={key}
          onClick={() => changeSelectedTab(item)}
          className={item === props.selectedTab ? activeClasses.join(' ') : defaultClasses.join(' ')}>
          {item}
        </button>
      ))}
    </section>
  )
}

export default Tab