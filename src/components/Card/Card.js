import React from 'react'
import './card.css'
const Card = ({item, addToCart}) => {
  const {id, title, price, description, category, image} = item;
  return (
    <div className='card'>
      
        <div className='container' key={id}>
            <img src={image} alt="no available" />
            <p className='category'>{category}</p>
            <h4>{title}</h4>
            <p className='desc'>{description}</p>
            <p style={{fontWeight: "bold",padding:"10px"}}>$ {price}</p>
           
            <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
       </div>
  )
}

export default Card