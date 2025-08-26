import { createContext, useContext,useState } from "react";

export const Context = createContext();

export const StoreContext = ({ children }) => {

    const [currState, setCurrState] = useState('Singup')
    const [showLoginForm, setShowLoginForm] = useState(false);




    const contextValue = {
        currState,
        setCurrState,
        showLoginForm,
        setShowLoginForm
    }

    return (
        <Context.Provider value={contextValue} >
             {children}
        </Context.Provider>
    )
}