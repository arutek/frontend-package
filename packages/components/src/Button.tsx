import { useState } from 'react'

const Button = () => {
  const [coba, setCoba] = useState(0)
  return (
    <button onClick={() => setCoba(coba + 1)} className="bg-primary text-white">Yyy {coba}</button>
  )
}

export default Button