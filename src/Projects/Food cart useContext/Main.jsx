import { useState } from 'react'
import { Viewcart } from './Viewcart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Header } from './Header'
import './Main.css'
import { createContext } from 'react';

export const cartcontext = createContext();

export const Main = () => {
    const [cart, setCart] = useState([]);
    return (
        <>
            <cartcontext.Provider value={{cart,setCart}}>
                <BrowserRouter>
                    <Header cart={cart}/>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/Viewcart"
                                element={<Viewcart />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </cartcontext.Provider>
        </>
    )
}
