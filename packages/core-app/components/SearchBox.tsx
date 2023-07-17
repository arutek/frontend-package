import {useState} from 'react'
import notification from '../helpers/notification'

function SearchBox() {
  const [cari, setCari] = useState('')
  return (
    <div>
      <input value={cari} type="text" placeholder="Ketik sesuatu..." className="input"/>
      <div onClick={() => notification.notifySuccess('ANJAY')}>
        <button className="btn btn-success">Search</button>
      </div>
    </div>
  )
}

export default SearchBox
