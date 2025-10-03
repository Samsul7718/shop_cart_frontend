import { useEffect } from "react";
import { useState } from "react";
import { createContext,useContext } from "react";


const CartContext=createContext()

export const useCart=()=>useContext(CartContext)

export const CartProvider=({children})=>{
    const [cart,setCart]=useState(()=>{
          const savedCart=localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
    })

    useEffect(()=>{
       localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    const addToCart=(product)=>{
        const existing = cart.find((p) => p.id === product.id);
      if (existing) {
        setCart(prev =>
        prev.map(p =>
        p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
     );
    } else {
     setCart(prev => [...prev, { ...product, qty: 1 }]);
  }
    }
      const incQty=(id)=>{
        setCart((prev) => prev.map(item=>item.id===id?{...item,qty:item.qty+1}:item));
    }
    const decQty=(id)=>{
      setCart((prev)=>
        prev.map(item=>item.id===id?{...item,qty:item.qty>1?item.qty-1:1}:item))
    }
    const remove=(id)=>{
       setCart((prev)=>prev.filter(item=>item.id !=id))
    }
  
    return(
        <CartContext.Provider value={{cart,addToCart,incQty,decQty,remove}}>
            {children}
        </CartContext.Provider>
    )
}