import React from 'react'
import { ProductBody, ProductFooter, ProductHeader, ProductImage, ProductTypes, ProductWrapper, ToTreats } from './style';
import { BsInfo } from 'react-icons/bs'
import { FaDisease } from 'react-icons/fa';
import { CgComponents } from 'react-icons/cg'

const Product = ({index, product}) => {

  const {name, picture, description, composition, toTreat, types} = product;

  const setAosDir = (k) => {
    if ((k-3)%3 === 0) return "left"
    else if ((k-2)%2 === 0) return "right"
    else return "down"
  }

  return (
    <ProductWrapper
      data-aos={`fade-${setAosDir(index+1)}`}
    >
      <ProductImage>
        {picture}-{index}
      </ProductImage>
      <ProductHeader>
        <h1>{name}</h1>
        <ProductTypes>{types.map((type, index) => (<span key={index}>{type}</span>))}</ProductTypes>
      </ProductHeader>
      <ProductBody>
        <div className='description'>
          <div className='icon'><BsInfo  /></div>
          <p>{description}</p>
        </div>
      </ProductBody>
      <ToTreats>
        <div className="icon"><FaDisease /></div>
        <div className="items">
          {toTreat.map((tt, index) => (<span key={index}>{tt}</span>))}
        </div>
      </ToTreats>
      {/* <ProductFooter>
        <h3><CgComponents /><span>Composition</span></h3>
        <div className="items">
          {composition.map((item, index) => (<span key={index}>{item}</span>))}
        </div>
      </ProductFooter> */}
    </ProductWrapper>
  )
}

export default Product