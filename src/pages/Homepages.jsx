import React from 'react'
import WelcomeBanner from '../components/home/WelcomeBanner'
import { products } from '../data/ProductData'
import ProductsCard from '../components/products/ProductsCard'

function Homepages() {
  return (
    <div>
      <WelcomeBanner user= 'Samiksha' />
      <div>
        <h1> Highlighted Products</h1>
        <div> 
          {products.map((product) =>(
            <ProductsCard
            key={ product.id}
            product={ product}
            />

          ))}
        </div>
      </div>
      </div>
  )
}

export default Homepages