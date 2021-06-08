import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './rootReducer';

const store = createStore(reducer);

it('renders without crashing', () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
});

it('adds item to cart on click', function() {
	const { queryByDisplayValue, getByText, getByDisplayValue } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);

	// expect(queryByDisplayValue('tv')).not.toBeInTheDocument();
});
