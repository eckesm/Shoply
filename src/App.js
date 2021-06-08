import React from 'react';
// import { useSelector } from 'react-redux';
import Routes from './Routes';
import Nav from './Nav';
import Cart from './Cart';
import ProductList from './ProductList';
import './App.css';

function App() {
	// const cart = useSelector(store => store.cart);
	// const dispatch = useDispatch();

	return (
		<div className="App">
			<Nav />
			<Cart />
			{/* <ProductList /> */}
			<Routes />
		</div>
	);
}

export default App;
