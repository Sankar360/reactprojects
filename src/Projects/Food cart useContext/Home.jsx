import React, { useState } from 'react'
import Datas from './Datas.json';
import { Product } from './Product';
import './Home.css'

export const Home = () => {
  const [Products]=useState(Datas)
  return (
    <div className='product-container'>
        {Products.map((product)=>(
          <Product key={product.id}
          product={product}/>
        ))}
    </div>
  )
}
