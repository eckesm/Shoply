import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from './actions';
import './ProductCard.css';

const ProductCard = ({ id, name, price, description, image_url }) => {
	const dispatch = useDispatch();
	const addToCart = () => dispatch(addProduct(id, name));
	const removeFromCart = () => dispatch(removeProduct(id));

	return (
		<div className="ProductCard">
			<h1>{name}</h1>
			<div className="ProductCard-details">
				<p className="ProductCard-detail">
					<b>Price:</b> {price}
				</p>
				<p className="ProductCard-detail">
					<b>Description:</b> {description}
				</p>
			</div>
			<img className="ProductCard-image_url" src={image_url} alt={name} />
			<div className='ProductCard-buttons'>
				<button onClick={addToCart}>Add to Cart</button>
				<button onClick={removeFromCart}>Remove from Cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
