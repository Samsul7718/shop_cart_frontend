import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductPage = () => {
    const [products,setProducts]=useState([])
  const {addToCart}=useCart()
  const navigate=useNavigate()

    useEffect(()=>{
    fetch("https://shop-cart-backend-khaki.vercel.app")
    .then(res=>res.json())
    .then(data=>setProducts(data))
    .catch(err=>console.log(err))
  },[])

  const handleCartProduct=(product)=>{
        addToCart(product);
        navigate('/cart')
  }
  return (
    <div className=' p-4'>
        <div className='flex justify-between items-center gap-100 md:gap-70'>
            <div className="flex-1"></div>
           <h2 className="text-2xl mb-4 font-bold ">Product Page</h2>
           <Link to="/cart">
           <button className='bg-sky-400 text-white p-4 m-4'>Go to Cart</button>
           </Link>
         
        </div>
         
         <ul className='space-y-4'>
            {products.map((product)=>(
                <li 
                key={product.id}
                className="flex items-center gap-4 border p-2 rounded"
                >
                    <img src={product.imageUrl} alt="" width="100" 
                    className="object-cover"/>
                    <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                     <p>${product.price}</p>
                  </div>
                   <button
                     onClick={() => handleCartProduct(product)}
                     className="bg-green-400 text-white px-4 py-2 rounded">
                     Add to Cart
                  </button>
                </li>
            ))}
         </ul>
    </div>
  )
}

export default ProductPage