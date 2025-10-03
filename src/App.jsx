import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import { useEffect } from 'react'
import './App.css'
import ProductPage from './component/ProductPage'
import CartPage from './component/CartPage'

function App() {
 

  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
