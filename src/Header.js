import { Link } from "react-router-dom"
import "./header.css" ;

function Header()
{
    return(
        <div class = "header">
            
            <div class= "logo">
                <img src = "image6.png"/>
            </div>

        
           <Link to = "/"> Home </Link>
            <Link to = "about"> About </Link>
            <Link to = "contact"> Contact </Link>
            <Link to = "service"> Service </Link>
            <Link to = "getApi"> GetApi </Link>
            
        
        </div>    
        )
}

export default Header