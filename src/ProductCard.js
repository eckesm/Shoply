import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, name, image_url }) => {

	return (
		<Link to={`/products/${id}`}>
			<div className="ProductCard">
				<h4 className='ProductCard-name'>{name}</h4>
				<img className="ProductCard-image_url" src={image_url} alt={name} />
			</div>
		</Link>
	);
};

export default ProductCard;
