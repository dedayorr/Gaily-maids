import React, { ReactNode } from 'react'

interface ModalProps {
    children: ReactNode;
  }

  const Modal: React.FC<ModalProps> = ({ children }) =>  {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 bg-[#00000048] z-50 flex justify-center items-center h-full'>
    {children}
  </div>
  )
}

export default Modal