import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

function Card({ src, title, description, price }) {
    return (
            <Link to="/spots" className='card'>
                <img src={src} alt="" />
                <div className="card__info">
                    <h2>{title}</h2>
                    <h3>{price}</h3>
                </div>
            </Link>
    )
}

export default Card
