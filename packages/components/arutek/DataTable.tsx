// interface headerType {
//   key: string,
//   value: any,
// }
// interface bodyType {
//   path: string,
//   data: headerType[]
// }

// interface PropList {
//   header: headerType[],
//   body: bodyType[],
//   tableStyle?: 'numbered'|'marked',
//   markerIndex?: string,
//   rowClicked?: (val:string) => void,
// }

// const DataTable = (props:PropList) => {
//   const rowClicked = (val) => {
//     props.rowClicked(val)
//   }
//   return (
//     <table className="w-full">
//       <thead>
//         <tr className="text-left border-b border-foreground">
//           {props.tableStyle === 'marked' && <th className="py-8 w-20" />}
//           <th className="py-8">Nopol</th>
//           <th className="py-8">Nama PO</th>
//           <th className="text-center py-8">Kategori</th>
//           <th className="py-8">Data DASI</th>
//           <th className="py-8">Data Referensi</th>
//         </tr>
//       </thead>
//       <tbody>
//         {props.body.map((res, key) => (
//           <tr key={key} onClick={() => rowClicked(res.path)} className="cursor-pointer border-b border-foreground hover:bg-foreground">
//             {props.tableStyle === 'marked' &&
//               <td className="py-8">
//                 {!res.data[props.markerIndex || key] && <div className="bg-red-70 rounded-full p-4 w-32 text-center text-white font-bold">!</div>}
//               </td>
//             }
//             <td className="py-8">{res.nopol}</td>
//             <td className="py-8">{res.poName}</td>
//             <td className="text-center py-8">{res.poKat}</td>
//             <td className="py-8">{res.dasi}</td>
//             <td className="py-8">{res.reference}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }

// export default DataTable