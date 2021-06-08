import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
	return (
		<div className='Nav'>
			<Link className='Nav-link' to="/products">All Products</Link>
			<Link className='Nav-link' to="/cart">Cart</Link>
		</div>
	);
}

export default Nav;
