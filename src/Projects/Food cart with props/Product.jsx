import React from 'react'
import './Product.css'

export const Product = ({product,cart,setCart}) => {


    const name=product.name.length>21?product.name.substring(0,20)+"..":product.name
  
    const addcart=()=>{
        setCart([...cart,product])
    }
    const removecart=()=>{
        setCart(cart.filter((c)=>c.id!==product.id))
    }
    return (
    <div className='product'>
        <div className="img">
            <img src={product.pic} alt="img" />
        </div>
        <div className="details">
        <h3>{name}</h3>
        <p>Price Rs:{product.amt}</p>
        {cart.includes(product)?(
            <button onClick={removecart} className='btnremove'>Remove to Card</button>
        ):(<button onClick={addcart}>Add to Card</button>)}
        </div>
    </div>
  )
}
