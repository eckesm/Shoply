import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
	const { products, cartItems, cartTotal } = useSelector(store => store);
	return (
		<div className="Cart">
			<h1>Cart</h1>
			{Object.keys(cartItems).length === 0 ? (
				<p>No items in cart.</p>
			) : (
				<div>
					{Object.keys(cartItems).map(id => (
						<p key={id} className="Cart-product">
							<Link to={`/products/${id}`}>
								<b>{products[id].name}:</b>
							</Link>{' '}
							{cartItems[id]} x {products[id].price.toFixed(2)} ={' '}
							{(cartItems[id] * products[id].price).toFixed(2)}
						</p>
					))}
					<p>
						<b>Total:</b> {cartTotal}
					</p>
				</div>
			)}
		</div>
	);
};

export default Cart;
