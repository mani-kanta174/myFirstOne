import {Link,Outlet} from 'react-router-dom'
const Product=()=>{
    return(
        <div>
            <input type="search" placeholder="Search" /> <br/>
        <nav>
            <Link to='Feutured'>Feutured</Link>
            <Link to='New'>newProduct</Link>
        </nav>
        <Outlet /> 
        </div>
         
    )
}
export default Product