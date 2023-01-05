import { createContext, useState, useEffect } from "react";

const MainContext = createContext({})

export const MainProvider = ({ children }) => {

    return (
        <MainContext.Provider
        value={{

        }}>
            
            {children}
        </MainContext.Provider>
    )
}

export default MainContext