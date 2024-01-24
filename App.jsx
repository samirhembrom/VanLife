import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VansDetails from "./pages/Vans/VansDetails"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"
import "./server"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="/host" element={<HostLayout/>}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VansDetails />} />                
                </Route>
            </Routes>
        </BrowserRouter>
    )
}