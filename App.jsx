import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VansDetails from "./pages/VansDetails"
import "./server"

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <nav className="nav">
                    <Link className="nav--logo" to="/">#Vanlife</Link>
                    <div className="nav--links">
                        <Link to="/About">About</Link>
                        <Link to="/Vans">Vans</Link>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VansDetails />} />                
            </Routes>
        </BrowserRouter>
    )
}