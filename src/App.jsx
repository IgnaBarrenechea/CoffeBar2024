import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart.jsx'
import ItemDetails from './components/ItemDetail.jsx'
import Home from './components/home.jsx'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail.jsx'


const App = () => {
  return (
    <BrowserRouter>

      <Navbar/>
 
      <Routes> 

        <Route exact path="/" element = {<Home />} />
        <Route exact path="/cart" element = {<Cart />} />
        <Route exact path="/categoria/:categoriaId" element = {<ItemListContainer />} />
        <Route exact path="/producto/:id" element = {<ItemDetailContainer />} />

      </Routes>


    </BrowserRouter>
  )
}

export default App
