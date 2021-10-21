import React from "react";
import { Link } from "react-router-dom";
function Not404(){
    return(
        <div>
<h2>Страницы не существует</h2>
        <Link to='/'>На главную</Link> 
        </div>
        
    )
}

export default Not404