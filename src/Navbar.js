import {NavLink} from 'react-router-dom'
 
const Navbar=()=>{
     const stylink=({isActive})=>{
        return{
            fontWeight:isActive? 'Bold':'Normal',
            textDecoration:isActive? 'none':'Underlined'
        }
    }
    return(
        <nav className='Primary-nav'>
            <NavLink style={stylink} to="/">HOME</NavLink> 
            <NavLink style={stylink} to="about">ABOUT</NavLink>  
            <NavLink style={stylink} to="Product">Product</NavLink>  
         </nav>
    )
}
export default Navbar;