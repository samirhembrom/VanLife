import React from "react"
import { 
    BrowserRouter, 
    Routes, 
    Route, 
    RouterProvider, 
    createBrowserRouter,
    createRoutesFromElements
 } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans,{loader as loadVans} from "./pages/Vans/Vans"
import VansDetails from "./pages/Vans/VansDetails"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import VansD from "./pages/Host/Vans"
import VansDe from "./pages/Host/VansDetails"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhoto from "./pages/Host/HostVanPhotos"
import HostLayout from "./components/HostLayout"
import NotFound from "./pages/NotFound"
import Error from "./components/Error"
import "./server"



export default function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/host" element={<HostLayout/>}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<VansD />} />
                
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans/:id" element={<VansDe/>}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhoto />} />
                </Route>
            </Route>
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} loader={loadVans} errorElement={<Error/>} />
            <Route path="vans/:id" element={<VansDetails />} />                
            <Route path="*" element={<NotFound/>}/>
        </Route>
    ))
    return (
        <RouterProvider router={router}/>
    )
}