import React, { useEffect, useState } from 'react'
import './cart.css'
const Cart = ({cart,setCart,handleProductQuantity}) => {
  const [price,setPrice] = useState(0);
  const hadlePrice = () => {
    let totalAmount = 0;
    cart.map(item =>{
      totalAmount += item.price*item.quantity;
    })
    setPrice(totalAmount);

  }
  useEffect(() => {
    hadlePrice();
  })

  const removeProduct = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }

  console.log(cart)
  
  return (
    <div className='cart'>
      
      { cart.map(item => {
        return (<>
        <div className='cart-box' key={item.id}>
        <div className='cart-img'>
          <img src={item.image} alt="no available" />
          <p>{item.title}</p>
        </div>
        <div>
          <button onClick={() =>handleProductQuantity(item,+1)}>+</button>
          <button>{item.quantity}</button>
          <button onClick={() =>handleProductQuantity(item,-1)}>-</button>  

        </div>
        <div>
          <span>{item.price}</span>
          <button onClick={() => removeProduct(item.id)}>Remove</button>
        </div>

       
      </div>
      </>)
      }
        
      )} 
      <div className='total'>
          <span>Total Price: ${price}</span>
        </div>
    </div>
  )
}

export default Cart