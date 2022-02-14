import react, { useContext }from 'react'

import { AuthContext } from "../contexts/auth"
 
const HomePage = ()=> {
    const {logout} = useContext(AuthContext)

    const handleLogout = () =>{
      logout()
    }
    return (
    <>   
    <h>HomePage</h>
    <button onClick={ handleLogout }> Logout</button>
    </>
    )
}
export default HomePage;
