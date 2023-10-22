import { createContext } from "react";

const authContext = createContext(null)


const AuthProvider = ({children}) => {

    const authinfo = {
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;