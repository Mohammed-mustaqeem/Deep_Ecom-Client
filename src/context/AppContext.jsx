import { useUser } from '@clerk/clerk-react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyProducts } from '../assets/assets/data'
const AppContext = createContext()
 
export const AppContextProvider = ({children}) => {
    const navigate = useNavigate()
    const { user } = useUser()
    const [product, setProduct] = useState([])
    const [serchQuery, setSearchQuery] = useState("")
    const currency = import.meta.env.VITE_CURRENCY;

    const fetchProduct =async () => {
setProduct(dummyProducts);
    }
    useEffect(() => {
        fetchProduct();
    }, []);


    const value = { navigate, user, product, currency, serchQuery, setSearchQuery };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)