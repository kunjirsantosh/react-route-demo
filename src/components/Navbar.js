import { NavLink } from "react-router-dom"
import { useAuth } from "./Auth"

export const Navbar = () => {
    const navLinkStyle = ({ isActive })=>{
        return{
            fontWight: isActive ? 'bold' : 'normal',
            textDecoderion: isActive ? 'none': 'underline'
        }
    }
    const auth = useAuth();
    return(
        <nav>
            <NavLink to='/' style={navLinkStyle}>Home</NavLink>
            <NavLink to='/about' style={navLinkStyle} >About</NavLink>
            <NavLink to='/products' >Products</NavLink>
            <NavLink to='/profile'> Profile</NavLink>
            
            {
                !auth.user && (<NavLink to='/login'> Login</NavLink>)
            }
        </nav>
    )
}