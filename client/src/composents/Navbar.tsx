import { FunctionComponent } from "react"
import { Link } from 'react-router-dom'
 

export const Navbar: FunctionComponent = () => {

    return(
        <>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/List'>List</Link></li>
                <li><Link to='/Portfolio'>Portfolio</Link></li>
                <li><Link to='/Connection'>Connect</Link></li>
            </nav>
        </>
    )
}