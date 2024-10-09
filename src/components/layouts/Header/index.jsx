import { Link } from "react-router-dom"

function Header(){
    return (
        <header>
            <Link to='/'>home</Link>
            <Link to='/rank'>bang xep hang</Link>
            <Link to='/login'>login</Link>
        </header>
    )
}

export default Header