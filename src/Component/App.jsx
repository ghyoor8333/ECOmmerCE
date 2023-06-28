import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Shop from './Shop'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import Checkout from './Checkout'
import Contact from './Contact'
export default function App() {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<Home/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/single-product-page' element={<SingleProduct/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
