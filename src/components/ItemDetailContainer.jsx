import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const { id } = useParams
  
  const productos = [
    { id: 1, titulo:"producto A", descripcion:"descripcion del producto A", precio:1000, categoria: "A"},
    { id: 2, titulo:"producto B", descripcion:"descripcion del producto B", precio:1500, categoria: "A"},
    { id: 3, titulo:"producto C", descripcion:"descripcion del producto C", precio:2000, categoria: "A"}, 
    { id: 4, titulo:"producto D", descripcion:"descripcion del producto D", precio:1000, categoria: "B"},
    { id: 5, titulo:"producto E", descripcion:"descripcion del producto E", precio:1500, categoria: "B"},
    { id: 6, titulo:"producto F", descripcion:"descripcion del producto F", precio:2000, categoria: "B"}, 
    { id: 7, titulo:"producto G", descripcion:"descripcion del producto G", precio:1000, categoria: "C"},
    { id: 8, titulo:"producto H", descripcion:"descripcion del producto H", precio:1500, categoria: "C"},
    { id: 9, titulo:"producto I", descripcion:"descripcion del producto I", precio:2000, categoria: "C"}
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

    const productosFiltrados = productos.find((productos)=>productos.id == id)

    return (
    <div>
   
            <ItemDetail
              productos={productosFiltrados}
            />  
          
    </div>
  )
}

export default ItemDetailContainer
