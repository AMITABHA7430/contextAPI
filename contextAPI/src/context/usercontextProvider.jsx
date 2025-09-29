import react from 'react'
import usercontext from './usercontext'

function UserContextProvider({ children }) {
    const [user, setUser] = react.useState(null)
    return (
        <usercontext.Provider value={{ user, setUser }}>
            {children}
        </usercontext.Provider>
    )

}
export default UserContextProvider;