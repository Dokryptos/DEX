import { FunctionComponent } from "react"
import { Link } from 'react-router-dom'
 

export const Navbar: FunctionComponent = () => {

    return(
        <>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/List'>Home</Link></li>
                <li><Link to='/List/Details'>Home</Link></li>
                <li><Link to='/Portfolio'>Home</Link></li>
                <li><Link to='/Connection'>Home</Link></li>
            </nav>
        </>
    )
}