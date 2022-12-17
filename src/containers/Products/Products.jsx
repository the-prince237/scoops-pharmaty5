import React from 'react'
import Product from '../../components/Product/Product'
import { products } from '../../utils/constants'
import { ProductsList, ProductsWrapper } from './style'

const Products = () => {
  return (
    <ProductsWrapper className='section__margin'>
      <h1 className="title2">Nos Produits Fars</h1>
      <p className="text1">Nos produits rassemblent les meilleurs ressources que vous trouverez. Vous les connaissez bien, vous pouvez leur faire confiance !</p>
      <ProductsList>
        {
          products.map((prod, index) => 
            <Product index={index} key={index} product={prod} />
          )
        }
      </ProductsList>
    </ProductsWrapper>
  )
}

export default Products