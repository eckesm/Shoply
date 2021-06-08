import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<ProductList />
			</Route>
			<Route exact path="/products/:id">
				<ProductDetail />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
}

export default Routes