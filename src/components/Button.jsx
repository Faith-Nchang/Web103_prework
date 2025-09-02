import "./Button.css"

import { Link } from "react-router-dom"

const Button = ({ children, link }) => {
return (
    <button className='button'>
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
            {children}
        </Link>
    </button>
)
}


export default Button
