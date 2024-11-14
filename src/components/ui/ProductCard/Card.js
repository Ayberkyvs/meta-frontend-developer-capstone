import React from 'react'
import './Card.css'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import { FaCartPlus } from "react-icons/fa6";

const Card = () => {
  return (
    <div className='card--product' aria-label='Product Card'>
        <div className='card--product__header'>
            <Badge className="card--product__badge">New</Badge>
            <img src='https://via.placeholder.com/217x114' alt='Product' draggable={false}/>
        </div>
        <div className='card--product__content'>
            <div className='card--product__content__header'>
                <h4>6.60$</h4>
                <h3>Product Name</h3>
            </div>
            <p className='card--product__content__description'>This is a product description. It is best to keep it short, between 1 or 3 lines.</p>
        </div>
        <Button variant='fluid'>Add To Cart <FaCartPlus className='button__icon'/></Button>
    </div>
  )
}

export default Card