import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  
  const productos = [
    { id: 1, titulo:"producto 1", descripcion:"descripcion del producto 1", precio:1000},
    { id: 2, titulo:"producto 2", descripcion:"descripcion del producto 2", precio:1500},
    { id: 3, titulo:"producto 3", descripcion:"descripcion del producto 3", precio:2000}
  ]
  
  const mostrarProducto = new Promise((resolve, reject) => {
    if(productos.length > 0){
        setTimeout(()=>{
            resolve(productos)
        }, 3000)
    }  else {
        reject ("No se obtuvieron productos")
    }
  })

  mostrarProducto
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error)=>{
        console.log(error)
    })

    return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer
