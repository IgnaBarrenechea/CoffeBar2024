import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ItemDetailContainer from './ItemDetailContainer'
import ItemList from './ItemList'

const home = () => {
  return (
      <div>

         <Link to={"/"}>
            Estoy dentro del home
         </Link>
      </div>
  )
  
}

export default home
