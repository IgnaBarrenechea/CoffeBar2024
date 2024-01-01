import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Item from './components/Item'


const App = () => {
  return (
    <div>
      <Navbar/>    
      <ItemListContainer greeting={"Bienvenidos a Coffe Bar"}/>
    </div>
  )
}

export default App
