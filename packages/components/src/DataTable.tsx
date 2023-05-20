import { ReactNode, useState, MouseEventHandler, ChangeEventHandler, ChangeEvent, Dispatch, SetStateAction } from 'react'

interface propsType {
  headComponent: ReactNode,
  bodyComponent: ReactNode,
  totalData?: number,
  next?: MouseEventHandler<HTMLParagraphElement>,
  prev?: MouseEventHandler<HTMLParagraphElement>,
  size?: ChangeEventHandler<HTMLSelectElement>,
  filter?: filterQueryType,
}

const DataTable = (props:propsType) => {
  console.log(props.filter)
  return (
    <div className="w-full">
      <table className="w-full mb-20">
        <thead>
          {props.headComponent}
        </thead>
        <tbody>
          {props.bodyComponent}
        </tbody>
      </table>
      {props.filter && (
        <div className="flex justify-between w-full">
          <p>
            Menampilkan {((props.filter.page || 1) - 1) * (props.filter.size || 10) + 1} - {(props.totalData || 0) > (props.filter.page || 1) * (props.filter.size || 10) ? (props.filter.page || 1) * (props.filter.size || 10) : props.totalData || 0} dari {props.totalData || 0} data
          </p>
          <div className="flex gap-32">
            {(props.filter.page || 1) > 1 && <p onClick={props.prev} className="cursor-pointer">&lt;- Sebelum</p>}
            {((props.filter.page || 1) * (props.filter.size || 10)) < (props.totalData || 0) && <p onClick={props.next} className="cursor-pointer">Berikut -&gt;</p>}
          </div>
          <div className="flex gap-x-8">
            <span>Menampilkan</span>
            <select value={props.filter.size || 10} onChange={props.size} className="p-4 bg-dark-grey-20">
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>Per halaman</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default DataTable