import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(){
    
    return (<header>
        <nav className="nav">
            <Link className="nav--logo" to="/">#Vanlife</Link>
            <div className="nav--links">
                <NavLink to="/Host" className={({isActive}) => isActive ? "isActive" : null }>Host</NavLink>
                <NavLink to="/About" className={({isActive})=> isActive ? "isActive"  : null}>About</NavLink>
                <NavLink to="/Vans" className={({isActive})=> isActive ? "isActive"  : null}>Vans</NavLink>
            </div>
        </nav>
    </header>
    )
}