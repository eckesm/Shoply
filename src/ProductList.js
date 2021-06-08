import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard.js';
import './ProductList.css';

const ProductList = () => {
	const products = useSelector(store => store.products);

	return (
		<div>
			<h3>Products</h3>
			<div className='ProductList-products_div'>
				{Object.keys(products).map(id => (
					<ProductCard
						key={id}
						id={id}
						name={products[id].name}
						price={products[id].price}
						description={products[id].description}
						image_url={products[id].image_url}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
