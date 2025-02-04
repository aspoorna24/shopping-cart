import React from 'react'
import products from '../../data'
import Card from '../Card/Card'
import './products.css'
const Products = ({addToCart}) => {
  return (
    <div className='products'>
  {
    products.map((item) => {
        return(<Card key={item.id} item={item}  addToCart={addToCart}/>)
    })
  }

    </div>
  )
}

export default Products