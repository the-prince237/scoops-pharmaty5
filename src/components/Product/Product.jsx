import React from 'react'
import { ProductBody, ProductHeader, ProductImage, ProductTypes, ProductWrapper, ToTreats, ContactUs } from './style';
import { BsInfo } from 'react-icons/bs'
import { FaDisease } from 'react-icons/fa';

const Product = ({index, product}) => {

  const {name, picture, description, toTreat, types} = product;

  const setAosDir = (k) => {
    if ((k-3)%3 === 0) return "left"
    else if ((k-2)%2 === 0) return "right"
    else return "down"
  }

  return (
    <ProductWrapper
      // data-aos={`fade-${setAosDir(index+1)}`}
    >
      <ProductImage>
        <img src={picture} alt={name} />
      </ProductImage>
      <ProductHeader>
        <h1>{name.split(" ").map((word, index) => (
          <div key={`word-${index}-${word}`}>{word}</div>
        ))}</h1>
        <ProductTypes>{types?.map((type, index) => (<span key={index}>{type}</span>))}</ProductTypes>
      </ProductHeader>
      <ProductBody>
        <div className='description'>
          <div className='icon'><BsInfo  /></div>
          <p className='text1'>{description}</p>
        </div>
      </ProductBody>
      {toTreat && <ToTreats>
        <div className="icon"><FaDisease /></div>
        <div className="items">
          {toTreat?.map((tt, index) => (<span className='text1' key={index}>{tt}</span>))}
        </div>
      </ToTreats>}
      <ContactUs href="https://wa.me/c/237697952344" target="_blank" rel="noopener noreferrer">
        Contact Us
      </ContactUs>
    </ProductWrapper>
  )
}

export default Product