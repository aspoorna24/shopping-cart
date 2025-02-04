import React from "react";
import "./header.css";
import { FaCartPlus } from "react-icons/fa6";
const Header = ({size,setShow}) => {
  return (
    <div className="header">
      <div className="container">
        <div className="left" onClick={()=>setShow(true)}>
          <h2>Shopping Cart</h2>
        </div>

        <div className="right" onClick={()=>setShow(false)}>
          <i className="icon">
            <FaCartPlus style={{fontSize: "1.7rem",marginTop: "-15px"}}/></i>
            <div className="count">{size}</div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
