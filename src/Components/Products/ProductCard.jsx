import React from 'react'
import './ProductCard.css'

export const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  )
}