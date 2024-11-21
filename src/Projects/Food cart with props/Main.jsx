import { useState } from 'react'
import { Viewcart } from './Viewcart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Header } from './Header'
import './Main.css'

export const Main = () => {
    const [cart,setCart]=useState([]);
    return (
        <div>
            <BrowserRouter>
                <Header cart={cart} />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home 
                        cart={cart} setCart={setCart} />} />
                        <Route path="/Viewcart"
                         element={<Viewcart cart={cart}/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}
