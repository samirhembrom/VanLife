import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (<header>
        <nav className="nav">
            <Link className="nav--logo" to="/">#Vanlife</Link>
            <div className="nav--links">
                <Link to="/Host">Host</Link>
                <Link to="/About">About</Link>
                <Link to="/Vans">Vans</Link>
            </div>
        </nav>
    </header>
    )
}