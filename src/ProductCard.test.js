import React from 'react';
import ProductCard from './ProductCard';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './rootReducer';

const store = createStore(reducer);

it('renders without crashing', () => {
	render(
		<Provider store={store}>
			<ProductCard />
		</Provider>
	);
});

it('passes snapshot test', () => {
	expect(
		render(
			<Provider store={store}>
				<ProductCard
					id="test-id"
					name="test-name"
					price="1.99"
					description="test-description"
					image_url="https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
				/>
			</Provider>
		)
	).toMatchSnapshot();
});