import React from 'react'
import {Link} from 'react-router-dom'

import mylogo from '../img/Logo.png'

export function Navbar(props) {
    

    return (
        <header>
            <Link to="/" class="logo">
                <img src={mylogo} class="w-100" alt=""/>
            </Link>
        </header>
    )
}
