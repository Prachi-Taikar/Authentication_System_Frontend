import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
            <Link to = "/note" ><h2>My-Notes</h2> </Link>

            {user ? (
                
                 <h2 onClick = {logoutUser}><p>click here to </p> || Logout ||</h2>
            ) : (
                <Link to = "/login" > <h2>Login</h2></Link>
            )}
            
            
            {user && <p>Hello {user.username} , Have a nice day!</p>}
            
        </div>
    )
}

export default Header
