import React from 'react';
import ProductList from './ProductList';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './rootReducer';

const store = createStore(reducer);

it('renders without crashing', () => {
	render(
		<Provider store={store}>
			<ProductList />
		</Provider>
	);
});
