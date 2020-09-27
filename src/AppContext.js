import React, { createContext,useState } from 'react';


export const AppContext = createContext();

const ProviderApp = ({ children }) => {

    const [isAuth,setIsAuth] = useState(() => {
        return window.sessionStorage.getItem("token");
    });

    const [userId,setUser] = useState(() => {
        return window.sessionStorage.getItem("USER_ID");
    });

    const Value = {
        isAuth,
        ActiveteAuth : token =>{
            setIsAuth(true);
            window.sessionStorage.setItem("token",token);
        },
        RemoveAuth: () =>{
            setIsAuth(false);
            window.sessionStorage.removeItem("token");
        },
        userId,
        SaveUserId: userId => {
            setUser(userId);
            window.sessionStorage.setItem("USER_ID",userId);
        },
        RemoveUserId: () => {
            setUser("");
            window.sessionStorage.removeItem("USER_ID");
        }
    }

    return (
        <AppContext.Provider value={Value}>
            {children}
        </AppContext.Provider>
    )
}

export default {
    ProApp: ProviderApp,
    ConsApp: AppContext.Consumer
}