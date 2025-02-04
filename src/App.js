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
    setCart([...cart, item]);
    
  }
 
  const handleProductQuantity = (item,data) =>{
     let ind = -1;
     cart.forEach((data,index)=>{
      if(data.id === item.id){
        ind = index;
      }
     })
     const tempArray = cart;
     tempArray[ind].amount += data;
     if (tempArray[ind].amount === 0){
      tempArray[ind].amount = 1;
     }
     setCart([...tempArray]);
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
