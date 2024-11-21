import { useEffect, useState } from 'react'
import './Viewcart.css';

export const Viewcart = ({cart}) => {
  const[total,setTotal]=useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((acc,cur)=>acc+parseInt(cur.amt),0))
  },[cart])
  return (
    <>
      <h1 className="card-heading">Card Products</h1>
        <div className='card-container'>
            {cart.map((product)=>(
              <div className="card-product" key={product.id}>
              <div className="img">
                <img src={product.pic} alt="img" />
              </div>
              <div className="card-product-details">
                <h3>{product.name}</h3>
                <p>price rs:{product.amt}</p>
              </div>
            </div>
            ))}
        </div>
        <h2 className='card-amount'>Total Amount:{total}</h2>
    </>
  )
}
