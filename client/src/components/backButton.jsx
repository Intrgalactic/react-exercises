import { Link } from "react-router-dom"

export const Back = () => {
    return (
        
            <div className="back-button-container">
                <i>&#129060;</i>
                <Link to="/" style={{color:"black",textDecoration:"none"}}>Back</Link>
            </div>
    
    )
}