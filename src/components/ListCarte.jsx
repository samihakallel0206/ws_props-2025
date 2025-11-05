import React from 'react'
import { product } from '../product'
import Carte from './Carte'
const ListCarte = () => {
    // console.log(product)
  return (
      <div>
          {product.map((prod, index)=><Carte prod={prod} key={index}></Carte>)}
    </div>
  )
}

export default ListCarte