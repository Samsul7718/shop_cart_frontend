import React from 'react'
import { useCart } from '../context/CartContext'
import { useState } from 'react';

const CartPage = () => {
    // const [qty,setQty]=useState(1)
    const {cart,incQty,decQty,remove}=useCart();
    const total=cart.reduce((sum,item)=>sum + item.price * (item.qty || 1),0);
    console.log("Cart Data:", cart);


      const handleCheckout = async () => {
    try {
    const response = await fetch("https://shop-cart-backend-khaki.vercel.app/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products: cart , total: total   }),
      });
      const data = await response.json();
      console.log("Server Response:", data);
      alert(data.message); 
     } 
     catch (error) {
      console.error("Checkout Error:", error);
      alert("Something went wrong!");
     }
     };

    
  return (
     <div className='max-w-4xl mx-auto p-5'>
        <h1 className='text-2xl font-bold mb-5'>Your Shopping Cart</h1>
        {cart.length===0?
        (<h4>Cart is Empty</h4>)
     :( 
        <div className='space-y-5'>

            {cart.map((item,index)=>(

            <div
            key={index}
            className='flex items-center justify-between border p-4 rounded-lg shadow-sm'>
                <div className='flex items-center gap-4'>
                      <img 
                        src={item.imageUrl}
                        alt="item.name" 
                        className='w-20 h-20 object-cover rounded-lg'
                        />
                    <div>
                        <h1 className='font semi-bold'>{item.name}</h1>
                        <p className='text-gray-500'>{item.price}</p>
                    </div>
                </div>
                <div
        
                className='flex items-center gap-3'>
                    <button onClick={()=>decQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={()=>incQty(item.id)}>+</button>
                    <button onClick={()=>remove(item.id)}>remove</button>
                </div>
            </div>
               ))}
        </div>
        )}
        {/* Total price */}
        <div className='mt-8 p-5 shadow rounded-lg shadow-sm'>
            <h2 className='text-xl font-bold'>Total:INR {total}</h2>
            <button 
            onClick={handleCheckout}
            className='bg-blue-600 text-white px-6 py-2 rounded-lg mt-4'>
                Checkout
                </button>
        </div>
    </div>
  )
}

export default CartPage