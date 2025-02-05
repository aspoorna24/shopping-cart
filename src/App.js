import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [show,setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const addToCart = (item) =>{
    let isProductPresent = false;
    cart.forEach(product => {
      if(item.id === product.id){
        isProductPresent = true;
      }
    });
    if(isProductPresent){
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      },2000);
      return;
    }
    item.quantity = 1;
    setCart([...cart, item]);
    
  }
 
  const handleProductQuantity = (item,count) =>{
   if(item.quantity === 0)
   {
    const newCart = cart.filter(product => product.id !== item.id);
    setCart(newCart);
   }
    if(item.quantity >= 1){
   if(count === +1){
    item.quantity += 1;
   }
   else{
    item.quantity -= 1;
   }
   setCart([...cart]);
  }
   
  }

  return (
   <>
    <Header size={cart.length} setShow={setShow}/>
    {
      show ?  <Products  addToCart={addToCart}/> :  <Cart cart={cart} setCart={setCart} 
      handleProductQuantity={handleProductQuantity}/>
    }
   
   
    {
      warning && (
        <div className='warning'>Product is already in the cart</div>
      )
    }
   </>
  );
}

export default App;
