import React from 'react'
import Heading from '../ui/Heading/Heading';
import './Highlight.css';
import Button from '../ui/Button/Button';
import Card from '../ui/ProductCard/Card';
import { FaPlus } from 'react-icons/fa6';
const Highlight = () => {
    return (
        <section id='highlight' className='grid'>
            <div className='highlight__heading'>
                <Heading title='Specials' variant="section"/>
                <Button>View All <FaPlus className='button__icon' /></Button>
            </div>
            <div className='highlight__cards'>
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

export default Highlight;