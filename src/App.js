import React from 'react';
// import { useSelector } from 'react-redux';
import Cart from './Cart';
import ProductList from './ProductList'
import './App.css';

function App() {
	// const cart = useSelector(store => store.cart);
	// const dispatch = useDispatch();

	return (
		<div className="App">
			<Cart />
			<ProductList />
		</div>
	);
}

export default App;
