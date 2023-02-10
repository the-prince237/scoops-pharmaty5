import React from 'react'
import Product from '../../components/Product/Product'
import { useLanguageContext } from '../../context'
import { products } from '../../utils/constants'
import { ProductsList, ProductsWrapper } from './style'

const Products = () => {

  const { cw } = useLanguageContext()

  return (
    <ProductsWrapper className='section__margin'>
      <h1 className="title2">{ cw.products.title }</h1>
      <p className="text1">{ cw.products.description }</p>
      <ProductsList>
        {
          products?.map((prod, index) => 
            <Product index={index} key={index} product={prod} />
          )
        }
      </ProductsList>
    </ProductsWrapper>
  )
}

export default Products