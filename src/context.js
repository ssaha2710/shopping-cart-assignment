import React , {createContext, useState }from 'react'

export const cartContext  = createContext();

const context = ({children }) => {
    const [ cart,setCart ] = useState([]);

  return (
    <cartContext.Provider value = {{ cart, setCart }}>{children}</cartContext.Provider>
  )
}

export default context
