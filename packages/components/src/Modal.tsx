import { ReactNode, MouseEventHandler } from 'react'

interface propsType {
  title?: string,
  modalBody: ReactNode,
  closeModal: MouseEventHandler<HTMLElement>,
}

const Modal = (props:propsType) => {
  return (
    <section  className="fixed left-0 top-0 w-screen h-screen bg-black/70">
      <section className="absolute bg-background rounded-lg w-560 p-8 left-1/2 -translate-x-1/2 top-10 z-20">
        <div className="flex items-center justify-between mb-4">
          <div />
          <h1 className="font-bold text-xl">{props.title}</h1>
          <p onClick={props.closeModal} className="cursor-pointer"><i className="aru-icon-close font-bold text-3xl" /></p>
        </div>
        {props.modalBody}
      </section>
      <section onClick={props.closeModal} className="left-0 top-0 w-screen h-screen" />
    </section>
  )
}

export default Modal