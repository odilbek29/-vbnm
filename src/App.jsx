import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/home'
import Product from './pages/product/product'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:id' element={<Product></Product>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
