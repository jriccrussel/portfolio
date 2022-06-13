import { createContext, FC, useContext, useState, useEffect } from 'react'

interface IContextState {
    searchVAlue?: string
    isLoading?: boolean
    open?: boolean
    openTwo?: boolean
    close?: true
}

export const AppContext = createContext({})

export const ContextProvider = ({ children }:any ) => {

    const initialValue = {
        searchVAlue: '',
        isLoading: false,
        open: false,
        openTwo: false,
        close:true
    }

    const [states, setStates] = useState(initialValue)

    useEffect(() => {
    //   console.log(activeBtnOne)
    }, [])
    

    return (
        <AppContext.Provider value={{
            states,
            setStates,
        }}>
            {children}
        </AppContext.Provider>
    )
}