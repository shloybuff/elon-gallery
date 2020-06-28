import React from 'react'
import './css/Nav.css'
import {Link} from "react-router-dom";

export const Nav = ()=> {
    return(
        <div>
            <ul>
              <li><Link id='li' to="/upload">Upload</Link></li>
            </ul>
        </div>
    )

} 