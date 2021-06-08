import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from './actions';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
	const { id } = useParams();
	const products = useSelector(store => store.products);
	const product = products[id];

	const dispatch = useDispatch();
	const addToCart = () => dispatch(addProduct(id, product.name));
	const removeFromCart = () => dispatch(removeProduct(id));

	return (
		<div className="ProductDetail">
			<div className="ProductDetail-div">
				<h1>{product.name}</h1>
				<div className="ProductDetail-details">
					<p className="ProductDetail-detail">
						<b>Price:</b> {product.price}
					</p>
					<p className="ProductDetail-detail">
						<b>Description:</b> {product.description}
					</p>
				</div>
				<div className="ProductDetail-buttons">
					<button className="ProductDetail-button" onClick={addToCart}>Add to Cart</button>
					<button className="ProductDetail-button" onClick={removeFromCart}>Remove from Cart</button>
				</div>
				<img className="ProductDetail-image_url" src={product.image_url} alt={product.name} />
			</div>
		</div>
	);
};

export default ProductDetail;
