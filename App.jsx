import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <nav className="nav">
                    <Link className="nav--logo" to="/">#Vanlife</Link>
                    <div className="nav--links">
                        <Link to="/About">About</Link>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}