import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'
import Favorites from '../pages/Favorites'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoute from '../components/ProtectedRoute'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<ProtectedRoute><Products/></ProtectedRoute>}/>
        <Route path='/productDetails' element={<SingleProduct/>}/>
        <Route path='/fav' element={<Favorites/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='' element={}/> */}
    </Routes>
  )
}

export default Mainroutes