import React , {createContext, useState }from 'react'

export const modalContext  = createContext();

const context = ({children }) => {
    const [ openModal,setOpenModal ] = useState(false);

  return (
    <modalContext.Provider value = {{ openModal,setOpenModal}}>{children}</modalContext.Provider>
  )
}

export default context